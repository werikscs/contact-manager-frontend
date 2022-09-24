import styled from "styled-components";

export const BasicButtonStyled = styled.button`
  width: 100%;

  padding: 0.5rem 1rem;

  border-radius: ${({ theme }) => theme.border_radius.general};
  border: 2px solid ${({ theme }) => theme.color.black1};

  font-size: 1rem;
  font-weight: bold;

  color: ${({ theme }) => theme.color.white1};
  background-color: ${({ theme }) => theme.color.black1};

  margin: ${(props) => props.margin || "unset"};

  :hover {
    color: ${({ theme }) => theme.color.black1};
    background-color: ${({ theme }) => theme.color.white1};
  }
`;
