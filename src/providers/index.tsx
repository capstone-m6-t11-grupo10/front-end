import { IPropChildren } from '../interfaces/IAddress'
import { AuthProvider } from './AuthProvider'
import { UserProvider } from './UserProvider'
import { VeihicleProvider } from './vehicleProvider'

const Providers = ({ children }: IPropChildren) => (
  <AuthProvider>
    <UserProvider>
      <VeihicleProvider>{children}</VeihicleProvider>
    </UserProvider>
  </AuthProvider>
)

export default Providers
