import * as yup from 'yup'

export const validacoesYup = yup.object().shape({
  name: yup.string().required('Preencher campo nome é obrigatório!'),
  email: yup
    .string()
    .required('Preencher campo Email é obrigatorio!')
    .email('Email inválido!'),
  cpf: yup.string().required('Preencher campo CPF é obrigatorio!'),
  tel: yup.string().required('Preencher campo celular é obrigatorio!'),
  birthDate: yup
    .string()
    .required('Preencher campo data de nascimento é obrigatorio!'),
  bio: yup.string().required('Preencher campo descrição é obrigatorio!'),
  cep: yup.string().required('Preencher campo CEP é obrigatório!'),
  state: yup.string().required('Preencher campo estado é obrigatório!'),
  city: yup.string().required(' Preencher campo cidade é obrigatório!'),
  street: yup.string().required(' Preencher campo rua é obrigatório!'),
  number: yup.string().required(' Preencher campo numero é obrigatório!'),
  complement: yup
    .string()
    .required(' Preencher campo complemneto é obrigatório!'),
  password: yup
    .string()
    .required('Preencher campo senha é obrigatorio!')
    .matches(
      /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/,
      'Formato de senha incorreto ! São necessarios 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo'
    ),
  passwordConfirm: yup
    .string()
    .required('Confirmação de senha é obrigatório!')
    .oneOf([yup.ref('password')], 'Senhas diferentes')
})
