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
      <MenuButton path="/my-profile" pathText="Perfil" />
      <MenuButton path="/create-contact" pathText="Criar Contatinho" />
      <MenuButton path="/contacts" pathText="Ver Contatinhos" />
      <MenuButton pathText="Relatório" />
      <MenuButton path="/" pathText="Sair" />
    </HeaderStyled>
  );
};
