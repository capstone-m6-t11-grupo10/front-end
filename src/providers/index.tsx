import { IPropChildren } from '../interfaces/IAddress'
import { AuthProvider } from './AuthProvider'
import { VeihicleProvider } from './vehicleProvider'

const Providers = ({ children }: IPropChildren) => (
  <AuthProvider>
    <VeihicleProvider>{children}</VeihicleProvider>
  </AuthProvider>
)

export default Providers
