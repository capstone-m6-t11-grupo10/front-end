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
import { useEffect, useState } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import { gettingComments, postingComment } from '../../services/api'
import { Comments } from './comments'
import { commentsMocked } from '../../mocks/mocksComments'
import { useUser } from '../../providers/UserProvider'
import { CommentMaker } from './commentMaker'
import { VehicleOwnerCard } from './vehicleOwnerCard'
import { InfoVehicle } from './infoVehicle'
import { VehiclesPics } from './vehiclesPics'




export default function DetailedVehicle() {

  const params = useParams()
  const { listVehicle, vehicle } = UseVehicle()
  const [comments, setComments] = useState(commentsMocked)

  const idCarNotFound = 'f52c9c0e-aa92-497b-99e5-ad05c0c1e6ff'
  const idVehicle: string = params.vehicleId || ''

  const { verifyAuthenticated } = useAuth()
  const isAutheticated = verifyAuthenticated()

  useEffect(() => {
    idVehicle ? listVehicle(idVehicle) : listVehicle(idCarNotFound)
    gettingComments({ id: idVehicle, setComments })

  }, [])

  const propsCommentMaker = { idVehicle, setComments }


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
            <InfoVehicle vehicle={vehicle} />

            <Comments comments={comments} />
            {isAutheticated && <CommentMaker props={propsCommentMaker} />}

          </section>
          <section style={{ width: '30%' }}>
            <VehiclesPics vehicle={vehicle} />
            <VehicleOwnerCard owner={vehicle.user} />
          </section>
        </main>
      </Flex>
      <Footer />
    </Box>
  )
}
