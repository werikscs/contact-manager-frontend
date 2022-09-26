import { useRef, useState } from "react";
import { BasicInputStyled } from "./style";

export const BasicInputForm = ({
  label,
  type,
  name,
  placeholder,
  text = "",
  register,
  err = {},
}) => {
  const ref = useRef(null);

  return (
    <>
      <BasicInputStyled>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          defaultValue={text}
          {...register(name)}
        />
        {err[name] && <span>{err[name].message}</span>}
      </BasicInputStyled>
    </>
  );
};
