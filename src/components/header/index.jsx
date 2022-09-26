import { basicWrapperMotion } from "../../utils/animations-variants";
import { HeaderStyled } from "./style";

export const Header = () => {
  return (
    <HeaderStyled
      initial="initial"
      animate="finalized"
      variants={basicWrapperMotion}>
      <h1>Contatinhos</h1>
      <button>Perfil</button>
      <button>Criar Contatinho</button>
      <button>Ver Contatinhos</button>
      <button>Relatório</button>
      <button>Sair</button>
    </HeaderStyled>
  );
};
