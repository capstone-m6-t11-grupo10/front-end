import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Spacer } from '@chakra-ui/react'
import { IPropsVehicleIsActive } from '../../../interfaces/IVehicle'

export const IsActiveVehicle = ({ props }: IPropsVehicleIsActive) => {

    const { isActive } = props

    return <  >
        {isActive && <Text position='fixed' background='var(--brand2)' m='10px' height='fit-content' p='0px 5px' borderRadius='2px' color='var(--grey10)' >
            ativo</Text>}
        {!isActive && <Text position='fixed' background='var(--grey4)' m='10px' height='fit-content' p='0px 5px' borderRadius='2px' color='var(--grey10)' >
            inativo</Text>}
    </ >
}