import { BasicDivider } from "../../components/basic-divider";
import { BasicForm } from "../../components/basic-form";
import { BasicWrapper } from "../../components/basic-wrapper";
import { MessageRedirect } from "../../components/msg-redirect";
import { ToastifyMessage } from "../../utils/toastify-msgs";
import { registerFormSchema } from "../../schemas/register";

export const RegisterPage = () => {
  const registerPageComponents = [
    {
      label: "Nome",
      type: "text",
      name: "name",
      placeholder: "Digite seu nome",
    },
    {
      label: "Sobrenome",
      type: "text",
      name: "lastname",
      placeholder: "Digite seu sobrenome",
    },
    {
      label: "Email",
      type: "text",
      name: "email",
      placeholder: "Digite um email válido",
    },
    {
      label: "Telefone",
      type: "number",
      name: "phone",
      placeholder: "Digite um telefone",
    },
    {
      label: "Senha",
      type: "password",
      name: "password",
      placeholder: "Digite uma senha",
    },
    {
      label: "Confirmação",
      type: "password",
      name: "confirmPassword",
      placeholder: "Digite a senha novamente",
    },
  ];

  const handleRegister = (data) => {
    ToastifyMessage(false, "Email ou senha inválidos");
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
