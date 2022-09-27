import { basicWrapperMotion } from "../../utils/animations-variants";
import { MenuButton } from "../menu-button";

import { HeaderStyled } from "./style";

export const Header = () => {
  const logout = () => {
    sessionStorage.clear();
  };
  return (
    <HeaderStyled
      initial="initial"
      animate="finalized"
      variants={basicWrapperMotion}>
      <h1>Contatinhos</h1>
      <MenuButton path="/profile" pathText="Perfil" />
      <MenuButton path="/create-contact" pathText="Criar Contatinho" />
      <MenuButton path="/contacts" pathText="Ver Contatinhos" />
      <MenuButton callback={logout} path="/" pathText="Sair" />
    </HeaderStyled>
  );
};
