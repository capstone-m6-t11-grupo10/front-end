import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode
} from 'react'
import { IVehicle } from '../interfaces/IVehicle'
import api from '../services/api'

//criando tipagem de retorno
interface VehicleContextData {
  listVehicle: (id: string) => Promise<void>
  vehicle: IVehicle
}

export const VehicleContext = createContext<VehicleContextData>(
  {} as VehicleContextData
)

export const UseVehicle = () => {
  const context = useContext(VehicleContext)
  return context
}

interface VehicleProps {
  children: ReactNode
}

export const VeihicleProvider = ({ children }: VehicleProps) => {
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle)

  const listVehicle = async (id: string) => {
    console.log(id)
    await api
      .get(`vehicles/${id}`)
      .then(res => setVehicle(res.data))
      .catch(err => console.log(err))
  }

  return (
    <VehicleContext.Provider value={{ listVehicle, vehicle }}>
      {children}
    </VehicleContext.Provider>
  )
}
