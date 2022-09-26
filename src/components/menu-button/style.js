import styled from "styled-components";

export const MenuButtonStyled = styled.button`
  width: fit-content;

  padding: 0.5rem 1rem;

  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: bold;

  color: ${({ theme }) => theme.color.white1};
  background-color: ${({ theme }) => theme.color.blue1};

  margin: ${(props) => props.margin || "unset"};

  :hover {
    background-color: ${({ theme }) => theme.color.blue1_50};
  }

  a {
    text-decoration: none;

    font-weight: bold;

    color: ${({ theme }) => theme.color.white1};
  }
`;
