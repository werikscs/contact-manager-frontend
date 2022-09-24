import styled from "styled-components";

export const BasicWrapperStyled = styled.main`
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  h1 {
    color: ${({ theme }) => theme.color.black1};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    background-color: ${({ theme }) => theme.color.white1};

    min-width: 360px;
    max-width: 400px;
    height: fit-content;

    border-radius: 0.5rem;

    box-shadow: 0 0.25rem 0.5rem ${({ theme }) => theme.color.blue1};

    padding: 1.5rem 1rem;
  }
`;
