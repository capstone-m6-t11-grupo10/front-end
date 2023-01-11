import { Button } from "@chakra-ui/button"
import { Card } from "@chakra-ui/card"
import { Flex, Text } from "@chakra-ui/layout"
import { IUser } from "../../interfaces/IUser"

interface IProps {
    owner: IUser
}

export const VehicleOwnerCard = ({ owner }: IProps) => {


    return (
        <Card mt="2rem" padding={['2rem 4rem', '2rem 0rem']} bg={'var(--grey10)'}>
            <Flex
                justifyContent="center"
                flexWrap="wrap"
                flexDirection="column"
                alignItems="center"
                gap="1rem"
            >
                <img
                    style={{
                        borderRadius: '100%',
                        width: '100px',
                        height: '100px'
                    }}
                    src={owner && owner.image}
                />
                <Text color="var(--grey1)" fontWeight="600">
                    {owner && owner.name}
                </Text>
                <Text w='90%'>
                    {owner && owner.bio}
                </Text>
                <Button
                    bg="var(--grey0)"
                    color="var(--whiteFixed)"
                    w={["280px", '90%']}
                    h="48px"
                >
                    Ver Todos os Anuncios
                </Button>
            </Flex>
        </Card>
    )
}