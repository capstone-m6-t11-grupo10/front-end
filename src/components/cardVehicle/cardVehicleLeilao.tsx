import { IVehicleLeilao, IVehicleLeilaoProps } from '../../interfaces/IVehicle'

import MockLeilao from '../mockLeilao'

export const CardVehicleLeilao = ({ props }: IVehicleLeilaoProps) => {
  const { uuid, title, time, description, price, image, km, year, user } = props

  return <MockLeilao props={props} />
}
