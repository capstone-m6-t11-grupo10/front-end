import * as yup from 'yup'

export const validacoesYup = yup.object().shape({
  name: yup.string().required('Preencher campo nome é obrigatório!'),
  email: yup
    .string()
    .required('Preencher campo Email é obrigatório!')
    .email('Email inválido!'),
  cpf: yup.string().required('Preencher campo CPF é obrigatório!'),
  tel: yup.string().required('Preencher campo celular é obrigatório!'),
  birthDate: yup
    .string()
    .required('Preencher campo data de nascimento é obrigatório!'),
  bio: yup.string().required('Preencher campo descrição é obrigatório!'),
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
