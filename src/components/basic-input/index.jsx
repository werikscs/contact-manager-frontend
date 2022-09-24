import { BasicInputStyled } from "./style";

export const BasicInput = ({ label, type, placeholder }) => {
  return (
    <BasicInputStyled>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </BasicInputStyled>
  );
};
