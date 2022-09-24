import styled from "styled-components";

export const MessageRedirectStyled = styled.div`
  font-size: 0.9rem;

  padding: 1rem;

  a {
    text-decoration: none;

    font-weight: bold;

    color: ${({ theme }) => theme.color.blue1_75};

    :hover {
      color: ${({ theme }) => theme.color.orange1_dark};
    }
  }
`;
