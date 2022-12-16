import { IPropChildren } from '../interfaces/IAddress'
import { AuthProvider } from './AuthProvider'

const Providers = ({ children }: IPropChildren) => (
  <AuthProvider>{children}</AuthProvider>
)

export default Providers
