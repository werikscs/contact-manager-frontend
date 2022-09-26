import styled from "styled-components";

export const BasicDividerStyle = styled.div`
  min-width: ${({ theme }) => theme.size.minWidthDivider};
  max-width: ${({ theme }) => theme.size.maxWidthDivider};
  height: 1px;

  background-color: ${({ theme }) => theme.color.black1_50};
`;
