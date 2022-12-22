import { Header } from '../../components/Header'
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  Box
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { Footer } from '../../components/Footer'
//essa funcao vai retornar os valores para meu front
import { UseVehicle } from '../../providers/vehicleProvider'
import { useEffect } from 'react'
import { useAuth } from '../../providers/AuthProvider'
export default function DetailedVehicle() {
  const idCarNotFound = 'f52c9c0e-aa92-497b-99e5-ad05c0c1e6ff'
  const params = useParams()
  const { listVehicle, vehicle } = UseVehicle()

  const { setAuthenticated } = useAuth()
  setAuthenticated(true)

  useEffect(() => {
    if (params.vehicleId) {
      listVehicle(params.vehicleId)
    } else {
      listVehicle(idCarNotFound)
    }
  }, [])

  const imagemTeste = vehicle.images && vehicle.images[0].image
  return (
    <Box w="100%">
      <Flex
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
        bgGradient="linear(to-b, var(--brand1) 40%, transparent 25%)"
      >
        <Header />
        <main
          style={{
            padding: '5rem 10rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem'
          }}
        >
          <section
            style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem'
            }}
          >
            <Card bg={'var(--grey10)'}>
              <CardBody>
                <Image
                  src={imagemTeste || ''}
                  alt={vehicle?.title}
                  borderRadius="lg"
                  width={'400px'}
                  height={'300px'}
                  margin={'0 auto'}
                />
              </CardBody>
            </Card>
            <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
              <CardBody>
                <Heading size="md">{vehicle?.title}</Heading>
              </CardBody>

              <CardFooter display={'flex'} justifyContent={'space-between'}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <Text
                        padding="0.3rem"
                        bg="var(--brand4)"
                        color="var(--brand1)"
                      >
                        {vehicle?.year}
                      </Text>
                      <Text
                        padding="0.3rem"
                        bg="var(--brand4)"
                        marginLeft="2rem"
                        color="var(--brand1)"
                      >
                        {vehicle?.km} KM
                      </Text>
                    </div>
                    {/* <p>{params.vehicleId}</p> */}

                    <Button
                      color="var(--whiteFixed)"
                      marginTop="1rem"
                      variant="solid"
                      bg="var(--brand1)"
                    >
                      Comprar
                    </Button>
                  </div>
                </div>

                <Text color="var(--grey1)">
                  {/* R$ {mask(vehicle?.price, ['99.999.99', '9.999.999.99'])} */}
                  R${vehicle.price}
                </Text>
              </CardFooter>
            </Card>

            <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
              <Text>
                <p
                  style={{
                    color: 'var(--grey1)',
                    fontWeight: '600',
                    marginBottom: '2rem'
                  }}
                >
                  Descrição
                </p>
                {vehicle?.description}
              </Text>
            </Card>

            <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
              <h2
                style={{
                  color: 'var(--grey1)',
                  fontWeight: '600',
                  marginBottom: '2rem'
                }}
              >
                Comentários
              </h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    style={{
                      borderRadius: '100%',
                      width: '60px',
                      height: '60px'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text marginLeft="2rem"> Nome da pessoa</Text>

                  <Text marginLeft="2rem"> Há tantos dias atras</Text>
                </div>
              </div>

              <Text marginTop="2rem">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </Text>
            </Card>
            <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="https://s3.static.brasilescola.uol.com.br/be/2020/08/lobo-guara.jpg"
                  alt="Green double couch with wooden legs"
                  style={{
                    borderRadius: '100%',
                    width: '60px',
                    height: '60px'
                  }}
                />
                <Text marginLeft="2rem">Samuel Tigre</Text>
              </div>
              <textarea style={{ height: '100px', resize: 'none' }}></textarea>
              <Button
                marginTop="2rem"
                w="100px"
                variant="solid"
                bg="var(--brand1)"
                color="var(--whiteFixed)"
              >
                Comentar
              </Button>
            </Card>
          </section>
          <section style={{ width: '30%' }}>
            <Card
              display="flex"
              flexDirection="column"
              padding={'2rem 4rem'}
              bg={'var(--grey10)'}
            >
              FOTOS
              <Flex gap="1rem">
                {vehicle.images &&
                  vehicle.images.map(image => (
                    <Flex
                      align="center"
                      justifyContent="center"
                      bg="var(--grey7)"
                      gap="1rem"
                      w="90px"
                      h="90px"
                    >
                      <Image w="65px" h="50px" src={image.image} />
                    </Flex>
                  ))}
              </Flex>
            </Card>
            <Card mt="2rem" padding={'2rem 4rem'} bg={'var(--grey10)'}>
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
                  src="https://s3.static.brasilescola.uol.com.br/be/2020/08/lobo-guara.jpg"
                />
                <Text color="var(--grey1)" fontWeight="600">
                  Samuel tigre
                </Text>
                <Text>
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like)
                </Text>
                <Button
                  bg="var(--grey0)"
                  color="var(--whiteFixed)"
                  w="280px"
                  h="48px"
                >
                  Ver Todos os Anuncios
                </Button>
              </Flex>
            </Card>
          </section>
        </main>
      </Flex>
      <Footer />
    </Box>
  )
}
