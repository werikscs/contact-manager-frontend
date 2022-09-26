import styled from "styled-components";

export const BasicInputStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  label {
    font-size: 0.85rem;

    padding-bottom: 0.2rem;

    text-indent: 1rem;

    color: ${({ theme }) => theme.color.black1};
  }

  input {
    padding: 0.5rem 1rem;

    border-radius: ${({ theme }) => theme.borderRadius.general};
    outline: 2px solid ${({ theme }) => theme.color.black1_50};

    font-size: 0.9rem;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input:focus {
    outline: 2px solid ${({ theme }) => theme.color.blue2_75};
  }

  span {
    font-size: 0.9rem;

    font-style: italic;

    padding-top: 0.2rem;

    text-indent: 1rem;

    color: ${({ theme }) => theme.color.orange1_dark};
  }
`;
