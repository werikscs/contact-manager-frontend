import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import { AppStyled } from "./styles/app-style";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <ToastContainer />
      <AppStyled>
        <GlobalStyle />
        <AppRoutes />
      </AppStyled>
    </>
  );
};

export default App;
