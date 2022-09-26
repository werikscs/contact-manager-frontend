import { BasicDivider } from "../../components/basic-divider";
import { BasicWrapper } from "../../components/basic-wrapper";
import { MessageRedirect } from "../../components/msg-redirect";
import { BasicForm } from "../../components/basic-form";
import { loginFormSchema } from "../../schemas/login";
import { ToastifyMessages } from "../../utils/toastify-msgs";
import { clientAPI } from "../../api";
import { formInputs } from "../../utils/form-inputs";

export const LoginPage = () => {
  const loginPageComponents = [formInputs.email, formInputs.password];

  const handleLogin = (data) => {
    const res = clientAPI.POST.loginClient(data.email, data.password);
    ToastifyMessages.loginMsg(res);
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
