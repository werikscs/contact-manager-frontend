import { basicWrapperMotion } from "../../utils/animations-variants";
import { BasicWrapperStyled } from "./style";

export const BasicWrapper = ({ children }) => {
  return (
    <BasicWrapperStyled
      initial="initial"
      animate="finalized"
      variants={basicWrapperMotion}>
      {children}
    </BasicWrapperStyled>
  );
};
