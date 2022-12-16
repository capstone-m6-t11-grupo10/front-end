import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Spacer } from '@chakra-ui/react'
import { IPropsVehicle } from '../../interfaces/IVehicle'
import { IsActiveVehicle } from './isActive/isActive'
export const CardVehicle = ({ props }: IPropsVehicle) => {

    const {
        tittle,
        description,
        isActive,
        type,
        color,
        plate,
        images,
        price,
        km,
        year,
        user
    } = props

    const isOwnerSellerPerfil = true

    return <Card maxW='312px' shadow={'none'} outline='none' >

        <IsActiveVehicle props={{ isActive }} />
        <Image
            src={images}
            alt='Green double couch with wooden legs'
        />
        <Heading noOfLines={1} size='md' m='15px 0px' fontWeight={600} fontSize='16px'>
            {tittle}
        </Heading>
        <Text noOfLines={2}>
            {description}
        </Text>
        <Stack mt='6' gap='5px' direction='row' >
            <Box bg='var(--brand1)' borderRadius='50%' w='30px' h='30px' color='var(--grey10)' textAlign='center'>
                <Text margin='3px'>SL</Text>
            </Box>
            <Text color='var(--grey2)' fontWeight={500}>
                {user.name}
            </Text>
        </Stack>
        <Stack marginTop='10px' direction='row' gap='6' >
            <Box p='3' bg='var(--brand4)' color='var(--brand1)' fontWeight={500}>
                {km} km
            </Box>
            <Box p='3' bg='var(--brand4)' color='var(--brand1)' fontWeight={500}>
                {year}
            </Box>
            <Spacer />
            <Text color='var(--grey1)' fontWeight={500} fontSize='0,875em' >
                R$ {price}
            </Text>
        </Stack >
        {isOwnerSellerPerfil && <ButtonGroup margin='10px 0 ' p='0' >
            <Button background='var(--grey8)' border='var(--grey1) solid 2px' p='0.75em 1.25em' height='2,375em' >
                <Text fontSize='1.275em' fontWeight={600}>
                    Editar
                </Text>
            </Button>
            <Button background='var(--grey8)' border='var(--grey1) solid 2px' p='0.75em 1.25em' height='2,375em' >
                <Text fontSize='1.275em' fontWeight={600}>
                    Ver Como
                </Text>
            </Button>
        </ButtonGroup>}
    </Card >
}