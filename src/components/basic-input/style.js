import styled from "styled-components";

export const BasicInputStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  label {
    font-size: 0.9rem;

    padding-bottom: 0.2rem;

    text-indent: 1rem;

    color: ${({ theme }) => theme.color.black1_75};
  }

  input {
    padding: 0.5rem 1rem;

    border-radius: ${({ theme }) => theme.border_radius.general};
    outline: 1px solid ${({ theme }) => theme.color.black1};

    font-size: 0.9rem;
  }

  input:focus {
    outline: 1px solid ${({ theme }) => theme.color.orange1};
  }
`;
