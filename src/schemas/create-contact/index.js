import * as yup from "yup";

export const createContactFormSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório").min(1, "Mínimo 1 letras"),
  lastname: yup
    .string()
    .required("Campo obrigatório")
    .min(1, "Mínimo 1 letras"),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .min(11, "Mínimo 11 números"),
});
