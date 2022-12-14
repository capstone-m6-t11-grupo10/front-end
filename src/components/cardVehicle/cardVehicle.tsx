import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Spacer } from '@chakra-ui/react'

export const CardVehicle = () => {

    return <Card maxW='312px' shadow={'none'} outline='none' >
        <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
        />
        <Heading noOfLines={1} size='md' m='15px 0px' fontWeight={600} fontSize='16px'>
            Product title stays here - maximum 1 line
        </Heading>
        <Text noOfLines={2}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
        </Text>
        <Stack mt='6' gap='5px' direction='row' >
            <Box bg='var(--brand1)' borderRadius='50%' w='30px' h='30px' color='var(--grey10)' textAlign='center'>
                <Text margin='3px'>SL</Text>
            </Box>
            <Text color='var(--grey2)' fontWeight={500}>Samuel Leitão</Text>
        </Stack>
        <CardFooter gap='6' >
            <Box marginLeft='-12px' p='3' bg='var(--brand4)' color='var(--brand1)' fontWeight={500}>
                0 km
            </Box>
            <Box p='3' bg='var(--brand4)' color='var(--brand1)' fontWeight={500}>
                2019
            </Box>
            <Spacer />
            <Text color='var(--grey1)' fontWeight={500} fontSize='16px'>
                R$ 00.000,00
            </Text>
        </CardFooter>
    </Card >
}