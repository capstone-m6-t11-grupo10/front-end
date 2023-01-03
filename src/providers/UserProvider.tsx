import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState
} from 'react'
import { ICreateUser } from '../interfaces/IUser/index'
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
    data: Omit<ICreateUser, 'passwordConfirm'>,
    onSuccessModalOpen: OpenSuccessModal,
    onErrorModalOpen: OpenErrorModal
  ) => Promise<void>
  error: string
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
      data: Omit<ICreateUser, 'passwordConfirm'>,
      onSuccessModalOpen: OpenSuccessModal,
      onErrorModalOpen: OpenErrorModal
    ) => {
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

  return (
    <UserContext.Provider value={{ user, signUp, error }}>
      {children}
    </UserContext.Provider>
  )
}
