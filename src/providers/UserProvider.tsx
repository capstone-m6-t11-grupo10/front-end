import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { ICreateUser, ICreateUserAddress } from '../interfaces/IUser/index'
import { ILoginRequest } from '../pages/login'
import api from '../services/api'

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
}

const UserContext = createContext<UserContextData>({} as UserContextData)

export const useUser = () => {
  const context = useContext(UserContext)

  return context
}

export const UserProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [error, setError] = useState('')

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

  const signIn = useCallback(async ({ email, password }: ILoginRequest, onModalErrorOpen: OpenErrorModal) => {
    await api.post('/login', { email, password }).then(res => {
      const { token } = res.data

      localStorage.setItem('tokenUser', token);
    }).catch(err => {

      onModalErrorOpen(true)
      setError(err.response.data.message)
    })

  }, [])

  const userContextValues = useMemo(() => ({ user, signUp, error, signIn }), [])

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  )
}
