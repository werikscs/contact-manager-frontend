import { toast } from "react-toastify";

export const ToastifyMessage = (result, msg) => {
  result ? toast.success(msg) : toast.error(msg);
};
