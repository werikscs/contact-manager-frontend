import { basicWrapperMotion } from "../../utils/animations-variants";
import { MenuButton } from "../menu-button";

import { HeaderStyled } from "./style";

export const Header = () => {
  return (
    <HeaderStyled
      initial="initial"
      animate="finalized"
      variants={basicWrapperMotion}>
      <h1>Contatinhos</h1>
      <MenuButton pathText="Perfil" />
      <MenuButton pathText="Criar Contatinho" />
      <MenuButton pathText="Ver Contatinhos" />
      <MenuButton pathText="Relatório" />
      <MenuButton path="/" pathText="Sair" />
    </HeaderStyled>
  );
};
