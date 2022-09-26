import { BasicInputStyled } from "./style";

export const BasicInputForm = ({
  label,
  type,
  name,
  placeholder,
  register,
  err = {},
}) => {
  return (
    <>
      <BasicInputStyled>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          {...register(name)}
        />
        {err[name] && <span>{err[name].message}</span>}
      </BasicInputStyled>
    </>
  );
};
