import { Link } from "react-router-dom";
import { MenuButtonStyled } from "./style";

export const MenuButton = ({ pathText, path, callback }) => {
  return (
    <MenuButtonStyled onClick={callback}>
      <Link to={path}>{pathText}</Link>
    </MenuButtonStyled>
  );
};
