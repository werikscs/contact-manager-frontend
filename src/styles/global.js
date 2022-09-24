import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
    border: 0;
    list-style: none;
    font-family: ${({ theme }) => theme.font};
}

button{
    cursor: pointer;
}
button:hover{
    filter: brightness(90%);
}
`;