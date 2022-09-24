import styled from "styled-components";

export const BasicWrapperStyled = styled.main`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 360px;
  max-width: 400px;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.color.white1};

  box-shadow: 0 0.25rem 0.5rem ${({ theme }) => theme.color.blue1};

  h1 {
    padding: 1rem;
  }
`;
