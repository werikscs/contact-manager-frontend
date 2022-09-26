import { motion } from "framer-motion";
import styled from "styled-components";

export const BasicWrapperStyled = styled(motion.main)`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-width: ${({ theme }) => theme.size.minWidth};
  max-width: ${({ theme }) => theme.size.maxWidth};

  border-radius: ${({ theme }) => theme.borderRadius.general};

  background-color: ${({ theme }) => theme.color.white1};

  box-shadow: 0 0.1rem 0.25rem ${({ theme }) => theme.color.blue1_75};

  h1 {
    font-size: 1.6rem;
    padding: 1rem;
  }
`;
