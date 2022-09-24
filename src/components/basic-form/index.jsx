import { BasicFormStyled } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BasicInputForm } from "../basic-input-form";
import { BasicButton } from "../basic-button";

export const BasicForm = ({
  inputComponents = [],
  schema,
  submitButtonText = "",
  onSubmit = () => {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <BasicFormStyled onSubmit={handleSubmit(onSubmit)}>
      <>
        {inputComponents.map((input, i) => (
          <BasicInputForm
            key={i}
            label={input.label}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            register={register}
            err={errors}
          />
        ))}
      </>
      <BasicButton
        type="submit"
        text={submitButtonText}
        margin="1.25rem 0 0 0"
      />
    </BasicFormStyled>
  );
};
