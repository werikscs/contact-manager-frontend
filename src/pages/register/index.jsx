import { Navigate, useNavigate } from "react-router-dom";
import { clientAPI } from "../../api";
import { BasicDivider } from "../../components/basic-divider";
import { BasicForm } from "../../components/basic-form";
import { BasicWrapper } from "../../components/basic-wrapper";
import { MessageRedirect } from "../../components/msg-redirect";
import { registerFormSchema } from "../../schemas/register";
import { formInputs } from "../../utils/form-inputs";
import { ToastifyMessages } from "../../utils/toastify-msgs";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const registerPageComponents = [
    formInputs.name,
    formInputs.lastname,
    formInputs.email,
    formInputs.phone,
    formInputs.password,
    formInputs.confirmPassword,
  ];

  const handleRegister = (data) => {
    clientAPI.POST.createClient(data);
    ToastifyMessages.registerMsg(data);
    return navigate("/");
  };

  return (
    <BasicWrapper>
      <h1>Cadastrar</h1>
      <BasicDivider />
      <BasicForm
        headerText="Cadastrar"
        inputComponents={registerPageComponents}
        schema={registerFormSchema}
        submitButtonText="Cadastrar"
        onSubmit={handleRegister}
      />
      <BasicDivider />
      <MessageRedirect text="Já tem conta?" path="/" pathText="Entre" />
    </BasicWrapper>
  );
};
