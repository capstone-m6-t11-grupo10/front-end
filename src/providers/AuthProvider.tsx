import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  useMemo
} from 'react'

interface AuthContextProps {
  children: ReactNode
}

interface AuthContextData {
  token: string
  authenticated: boolean
  setAuthenticated: Dispatch<React.SetStateAction<boolean>>
  verifyAuthenticated: () => boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [authenticated, setAuthenticated] = useState(false)

  const [token] = useState(
    () => (localStorage.getItem('tokenUser') as string) || ''
  )

  useEffect(() => {
    const token = localStorage.getItem('tokenUser')

    if (token) {
      return setAuthenticated(true)
    }
  }, [])

  const verifyAuthenticated = () => {
    const token = localStorage.getItem('tokenUser')

    if (token) {
      setAuthenticated(true)
      return true
    } else { return false }
  }

  const authContextValues = useMemo(() => ({ authenticated, token, setAuthenticated, verifyAuthenticated }), [])

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  )
}
