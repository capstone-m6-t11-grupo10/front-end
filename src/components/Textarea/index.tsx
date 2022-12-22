import {
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextAreaProps,
  Box,
  FormControl,
  InputGroup,
  FormErrorMessage
} from '@chakra-ui/react'
import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useState
} from 'react'

import { FieldError } from 'react-hook-form'

interface TextAreaProps extends ChakraTextAreaProps {
  name?: string
  placeholder: string
  label: string
  error?: FieldError | null
}

type textareaVariationOptions = {
  [key: string]: string
}

const textareaVariation: textareaVariationOptions = {
  error: 'red.500',
  default: 'var(--grey7)',
  focus: 'var(--grey7)',
  filled: 'green.500'
}

export const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ name, label, placeholder, error, ...rest }, ref) => {
  const [value, setValue] = useState('')
  const [variant, setVariant] = useState('default')

  useEffect(() => {
    if (error) {
      return setVariant('error')
    }
  }, [error])

  const handleTextareaFocus = useCallback(() => {
    if (!error) {
      return setVariant('focus')
    }
  }, [error])

  const handleTextareaBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariant('filled')
    }
  }, [error, value])

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>

      <InputGroup flexDir="column">
        <ChakraTextarea
          name={name}
          color="var(--grey2)"
          borderColor={textareaVariation[variant]}
          fontWeight="400"
          fontSize="1.6rem"
          resize="none"
          placeholder={placeholder}
          border="1.5px solid var(--grey7)"
          borderRadius="4px"
          h="105px"
          px="16px"
          _placeholder={{
            fontWeight: '400',
            fontSize: '1.6rem',
            color: 'var(grey3)'
          }}
          onFocus={handleTextareaFocus}
          onChangeCapture={e => setValue(e.currentTarget.value)}
          onBlurCapture={handleTextareaBlur}
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  )
}

export const Textarea = forwardRef(TextareaBase)
