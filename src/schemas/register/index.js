import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório").min(3, "Mínimo 3 letras"),
  lastname: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo 3 letras"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .min(11, "Mínimo 11 números"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "Mínimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas são diferentes"),
});
