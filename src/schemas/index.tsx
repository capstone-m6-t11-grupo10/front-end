import { unMask } from 'remask'
import { z } from 'zod'

import * as yup from 'yup'

export const createUserSchema = z
  .object({
    name: z.string().min(1, 'Preencher campo nome é obrigatório'),
    email: z
      .string()
      .min(1, 'Preencher o campo email é obrigatório')
      .email('Insira um email válido'),
    cpf: z
      .string()
      .min(11, 'Insira um CPF válido')
      .transform(cpf => unMask(cpf)),
    phone: z
      .string()
      .min(11, 'Insira um número válido')
      .transform(tell => unMask(tell)),
    birthDate: z.string().min(8, 'Insira uma data válida'),
    bio: z.string().min(8, 'O campo biografia é obrigatório'),
    cep: z
      .string()
      .min(8, 'Insira um CEP válido')
      .transform(cep => unMask(cep)),
    state: z.string().min(1, 'Preencher campo cidade é obrigatório'),
    city: z.string().min(1, 'Preencher campo cidade é obrigatório'),
    street: z.string().min(1, 'Preencher campo rua é obrigatório'),
    number: z.string().min(1, 'Preencher campo número é obrigatório'),
    complement: z.string().min(1, 'Preencher campo complemento é obrigatório'),
    password: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/,
        'Formato de senha incorreto! São necessários 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo'
      ),
    passwordConfirm: z.string().min(1, 'Campo obrigatório')
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Senhas diferentes',
        path: ['passwordConfirm']
      })
    }
  })

export const validacoesYup = yup.object().shape({
  name: yup.string().required('Preencher campo nome é obrigatório!'),
  email: yup
    .string()
    .required('Preencher campo Email é obrigatório!')
    .email('Email inválido!'),
  cpf: yup.string().required('Preencher campo CPF é obrigatório!'),
  phone: yup.string().required('Preencher campo celular é obrigatório!'),
  birthDate: yup
    .string()
    .required('Preencher campo data de nascimento é obrigatório!'),
  bio: yup.string().required('Preencher a biografia é obrigatório!'),
  cep: yup.string().required('Preencher campo CEP é obrigatório!'),
  state: yup.string().required('Preencher campo estado é obrigatório!'),
  city: yup.string().required('Preencher campo cidade é obrigatório!'),
  street: yup.string().required('Preencher campo rua é obrigatório!'),
  number: yup.string().required('Preencher campo numero é obrigatório!'),
  complement: yup
    .string()
    .required(' Preencher campo complemento é obrigatório!'),
  password: yup
    .string()
    .required('Preencher campo senha é obrigatório!')
    .matches(
      /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/,
      'Formato de senha incorreto ! São necessários 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo'
    ),
  passwordConfirm: yup
    .string()
    .required('Confirmação de senha é obrigatório!')
    .oneOf([yup.ref('password')], 'Senhas diferentes')
})
