import * as yup from "yup";

export const createContactFormSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório").min(3, "Mínimo 3 letras"),
  lastname: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo 3 letras"),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .min(11, "Mínimo 11 números"),
});
