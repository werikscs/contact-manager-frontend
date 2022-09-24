import { BasicWrapperStyled } from "./style";

export const BasicWrapper = ({ children }) => {
  return (
    <BasicWrapperStyled>
      <div>{children}</div>
    </BasicWrapperStyled>
  );
};
