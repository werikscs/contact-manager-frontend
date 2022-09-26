import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderStyled = styled(motion.header)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;

  gap: 1rem;

  width: ${({ theme }) => theme.size.width};
  background-color: ${({ theme }) => theme.color.blue2_dark};

  border-radius: 0.5rem 0.5rem 0 0;

  box-shadow: 0 0rem 0.2rem ${({ theme }) => theme.color.blue1_75};

  h1 {
    padding: 1rem 0;
    color: ${({ theme }) => theme.color.white1};
    margin-right: auto;
  }

  > button {
    width: fit-content;

    padding: 0.5rem 1rem;

    border-radius: 0.5rem;

    font-size: 1rem;
    font-weight: bold;

    color: ${({ theme }) => theme.color.white1};
    background-color: ${({ theme }) => theme.color.blue1};

    margin: ${(props) => props.margin || "unset"};

    :hover {
      /* color: ${({ theme }) => theme.color.black1}; */
      background-color: ${({ theme }) => theme.color.blue1_50};

      outline: 1px solid ${({ theme }) => theme.color.blue1_50};
    }
  }
`;
