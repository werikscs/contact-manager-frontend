import styled from "styled-components";

export const AppStyled = styled.div`
  width: 100%;
  min-width: 900px;
  max-width: 1024px;
  height: 100vh;

  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.bg_app};
`;
