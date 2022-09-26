import { toast } from "react-toastify";

const toastCall = (result, msg) => {
  return result ? toast.success(msg) : toast.error(msg);
};

const login = (result) => {
  const msg = result ? "Logado com sucesso" : "Email ou senha inválidos";
  toastCall(result, msg);
};

const register = (result) => {
  const msg = result ? "Cadastrado com sucesso" : "Confira seus dados";
  toastCall(result, msg);
};

export const ToastifyMessages = {
  loginMsg: login,
  registerMsg: register,
};
