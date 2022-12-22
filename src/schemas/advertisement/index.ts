import { z } from 'zod'
import { isValidURL } from '../../utils/validateUrl'
import { isValidNumber } from '../../utils/isValidNumber'

export const createAdSchema = z.object({
  title: z.string().min(4, 'Título deve conter pelo menos 4 caracteres'),
  year: z
    .string()
    .min(4, 'Ano deve conter 4 caracteres')
    .max(4, 'Ano deve conter 4 caracteres')
    .refine(year => isValidNumber(year), 'Insira um ano válido'),
  km: z
    .string()
    .refine(km => isValidNumber(km, true), 'Insira um valor válido')
    .transform(km => +km),
  description: z.string().refine(description => {
    const descriptionList = description.split(' ')

    return descriptionList.length >= 5
  }, 'A descrição deve conter pele menos 5 palavras'),
  price: z.string().refine(price => isValidNumber(price, true)),
  image: z
    .string()
    .refine(imageURL => isValidURL(imageURL), 'Insira uma URL válida'),
  extraImages: z
    .string()
    .refine(imageURL => isValidURL(imageURL), 'Insira uma URL válida')
})
