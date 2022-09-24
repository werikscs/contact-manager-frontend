import { Link } from "react-router-dom";
import { MessageRedirectStyled } from "./style";

export const MessageRedirect = ({ text, path, pathText }) => {
  return (
    <MessageRedirectStyled>
      {text} <Link to={path}>{pathText}</Link>
    </MessageRedirectStyled>
  );
};
