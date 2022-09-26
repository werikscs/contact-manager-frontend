import styled from "styled-components";

export const MenuButtonStyled = styled.button`
  width: fit-content;

  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: bold;

  margin: ${(props) => props.margin || "unset"};

  a {
    width: 100%;

    padding: 0.5rem 1rem;

    text-decoration: none;

    font-weight: bold;

    border-radius: 0.5rem;

    color: ${({ theme }) => theme.color.white1};
    background-color: ${({ theme }) => theme.color.blue1};

    :hover {
      background-color: ${({ theme }) => theme.color.black1};
    }
  }
`;
