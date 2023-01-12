import { Button, ButtonProps } from '@chakra-ui/react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

interface NavItemProps extends ButtonProps {
  content: string
  redirectTo?: string
  to?: any
}

export const NavItem = ({ content, redirectTo, to, ...rest }: NavItemProps) => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => navigate(redirectTo || '/'), [])

  return (
    <Button
      color="var(--grey2)"
      fontSize="2xl"
      fontWeight="400"
      bg="transparent"
      _hover={{ transform: 'translateY(-7px)' }}
      transition="ease 0s, transform 0.2s"
      {...rest}
      onClick={handleNavigate}
    >
      {!to && content}
      {to && (
        <Link to={to} spy={true} smooth={true} offset={-100} duration={500}>
          {content}
        </Link>
      )}
    </Button>
  )
}
