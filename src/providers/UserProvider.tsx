import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { useNavigate } from 'react-router'
import { ICreateUser, ICreateUserAddress } from '../interfaces/IUser/index'
import { ILoginRequest } from '../pages/login'
import api from '../services/api'
import jwt_decode from 'jwt-decode'
import { IPayload } from '../interfaces/payload'
import { userMocked } from '../mocks/mocksUser'

interface AuthContextProps {
  children: ReactNode
}

interface IUser {
  name: string
  birthDate: string
  email: string
  phone: string
  cpf: string
  bio: string
  image: string | null
  id: string
  isActive: boolean
  isSeller: boolean
}

type OpenSuccessModal = (value: boolean) => void
type OpenErrorModal = (value: boolean) => void


interface UserContextData {
  user: IUser
  signUp: (
    data: Omit<ICreateUser, 'passwordConfirm' | 'cep' | 'state' | 'city' | 'street' | 'number' | 'complement'> & ICreateUserAddress,
    onSuccessModalOpen: OpenSuccessModal,
    onErrorModalOpen: OpenErrorModal
  ) => Promise<void>
  error: string
  signIn: ({ email, password }: ILoginRequest, onModalErrorOpen: OpenErrorModal) => Promise<void>
  getUser: () => Promise<IUser>
}

const UserContext = createContext<UserContextData>({} as UserContextData)

export const useUser = () => {
  const context = useContext(UserContext)

  return context
}

export const UserProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [payload, setPayload] = useState<IPayload>({} as IPayload)
  const [error, setError] = useState('Email ou senha inválidos')
  const navigation = useNavigate()


  const signUp = useCallback(
    async (
      data: Omit<ICreateUser, 'passwordConfirm' | 'cep' | 'state' | 'city' | 'street' | 'number' | 'complement'> & ICreateUserAddress,
      onSuccessModalOpen: OpenSuccessModal,
      onErrorModalOpen: OpenErrorModal
    ) => {
      console.log(data, 'provider')
      await api
        .post('users', data)
        .then(res => {
          onSuccessModalOpen(true)
          setUser(res.data)
        })
        .catch(err => {
          onErrorModalOpen(true)
          setError(err.response.data.message)
        })
    },
    []
  )

  const getUser = useCallback(async () => {
    const tokenUser = localStorage.getItem('tokenUser');

    const header = {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
    }

    const currentPayload: IPayload = await jwt_decode(tokenUser!)
    setPayload(currentPayload)

    const id = currentPayload.id

    const user = await api.get(`http://localhost:3000/users/${id}`, header).then(res => res.data)
    setUser(user)
    console.log('PROVIDER', user)
    return user
  }, [])

  const signIn = useCallback(async ({ email, password }: ILoginRequest, onModalErrorOpen: OpenErrorModal) => {
    await api.post('/login', { email, password }).then(res => {
      const { token } = res.data

      localStorage.setItem('tokenUser', token);
      navigation(`/`);

      getUser()
      console.log(payload.id)

    }).catch(err => {
      onModalErrorOpen(true)
      setError(err.response.data.message)
    })

  }, [])


  const userContextValues = useMemo(() => ({ user, signUp, error, signIn, getUser }), [])

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  )
}
