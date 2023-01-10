import { IVehicleLeilao, IVehicleLeilaoProps } from '../../interfaces/IVehicle'

import MockLeilao from '../mockLeilao'

export const CardVehicleLeilao = ({ props }: IVehicleLeilaoProps) => {
  const { id, title, time, description, price, image, km, year, user } = props

  return <MockLeilao props={props} />
}
