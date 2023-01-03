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

interface UserContextData {
  user: IUser
  signUp: (data: ICreateUser) => Promise<void>
}

const UserContext = createContext<UserContextData>({} as UserContextData)

export const useUser = () => {
  const context = useContext(UserContext)

  return context
}

export const UserProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<IUser>({} as IUser)

  const signUp = useCallback(async (data: ICreateUser) => {
    const response = await api
      .post('users', data)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <UserContext.Provider value={{ user, signUp }}>
      {children}
    </UserContext.Provider>
  )
}
