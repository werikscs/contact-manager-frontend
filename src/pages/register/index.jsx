import { BasicDivider } from "../../components/basic-divider";
import { BasicForm } from "../../components/basic-form";
import { BasicWrapper } from "../../components/basic-wrapper";
import { MessageRedirect } from "../../components/msg-redirect";
import { registerFormSchema } from "../../schemas/register";
import { formInputs } from "../../utils/form-inputs";

export const RegisterPage = () => {
  const registerPageComponents = [
    formInputs.name,
    formInputs.lastname,
    formInputs.email,
    formInputs.phone,
    formInputs.password,
    formInputs.confirmPassword,
  ];

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <BasicWrapper>
      <h1>Cadastrar</h1>
      <BasicDivider />
      <BasicForm
        headerText="Entrar"
        inputComponents={registerPageComponents}
        schema={registerFormSchema}
        submitButtonText="Entrar"
        onSubmit={handleRegister}
      />
      <BasicDivider />
      <MessageRedirect text="Já tem conta?" path="/" pathText="Entre" />
    </BasicWrapper>
  );
};
