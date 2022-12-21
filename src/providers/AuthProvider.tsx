import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch
} from 'react'

interface AuthContextProps {
  children: ReactNode
}

interface AuthContextData {
  token: string
  authenticated: boolean
  setAuthenticated: Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [authenticated, setAuthenticated] = useState(false)

  const [token, setToken] = useState(
    () => (localStorage.getItem('token') as string) || ''
  )

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      return setAuthenticated(true)
    }
  }, [authenticated])

  return (
    <AuthContext.Provider value={{ authenticated, token, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
