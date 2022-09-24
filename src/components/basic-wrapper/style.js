import { motion } from "framer-motion";
import styled from "styled-components";

export const BasicWrapperStyled = styled(motion.main)`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 360px;
  max-width: 400px;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.color.white1};

  box-shadow: 0 0.2rem 0.25rem ${({ theme }) => theme.color.blue1_75};

  h1 {
    padding: 1rem;
  }
`;
