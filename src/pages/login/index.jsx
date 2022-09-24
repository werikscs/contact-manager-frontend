import { BasicButton } from "../../components/basic-button";
import { BasicDivider } from "../../components/basic-divider";
import { BasicWrapper } from "../../components/basic-wrapper";
import { BasicInput } from "../../components/basic-input";
import { MessageRedirect } from "../../components/msg-redirect";

export const LoginPage = () => {
  return (
    <BasicWrapper>
      <h1>Entrar</h1>
      <BasicDivider />
      <BasicInput
        label="Email"
        type="text"
        placeholder="Digite um email válido"
      />
      <BasicInput
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
      />
      <BasicButton text="Entrar" margin="1rem 0 0 0" />
      <BasicDivider />
      <MessageRedirect
        text="Não tem conta?"
        path="/register"
        pathText="Cadastre-se"
      />
    </BasicWrapper>
  );
};
