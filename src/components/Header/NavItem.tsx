import { Button, ButtonProps } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

interface NavItemProps extends ButtonProps {
  content: string
  redirectTo: string
}

export const NavItem = ({ content, redirectTo, ...rest }: NavItemProps) => {
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate(redirectTo)}
      color="var(--grey2)"
      fontSize="2xl"
      fontWeight="400"
      bg="transparent"
      _hover={{ transform: 'translateY(-7px)' }}
      transition="ease 0s, transform 0.2s"
      {...rest}
    >
      {content}
    </Button>
  )
}
