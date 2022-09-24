import { BasicDivider } from "../../components/basic-divider";
import { BasicWrapper } from "../../components/basic-wrapper";
import { MessageRedirect } from "../../components/msg-redirect";
import { BasicForm } from "../../components/basic-form";
import { loginFormSchema } from "../../schemas/login";
import { ToastifyMessage } from "../../utils/toastify-msgs";

export const LoginPage = () => {
  const loginPageComponents = [
    {
      label: "Email",
      type: "text",
      name: "email",
      placeholder: "Digite um email válido",
    },
    {
      label: "Senha",
      type: "password",
      name: "password",
      placeholder: "Digite sua senha",
    },
  ];

  const handleLogin = (data) => {
    ToastifyMessage(false, "Email ou senha inválidos");
  };

  return (
    <BasicWrapper>
      <h1>Entrar</h1>
      <BasicDivider />
      <BasicForm
        headerText="Entrar"
        inputComponents={loginPageComponents}
        schema={loginFormSchema}
        submitButtonText="Entrar"
        onSubmit={handleLogin}
      />
      <BasicDivider />
      <MessageRedirect
        text="Não tem conta?"
        path="/register"
        pathText="Cadastre-se"
      />
    </BasicWrapper>
  );
};
