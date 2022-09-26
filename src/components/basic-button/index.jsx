import { BasicButtonStyled } from "./style";

export const BasicButton = ({ text, ...rest }) => {
  return <BasicButtonStyled {...rest}>{text}</BasicButtonStyled>;
};
