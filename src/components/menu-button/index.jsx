import { Link } from "react-router-dom";
import { MenuButtonStyled } from "./style";

export const MenuButton = ({ pathText, path }) => {
  return (
    <MenuButtonStyled>
      <Link to={path}>{pathText}</Link>
    </MenuButtonStyled>
  );
};
