import "react-toastify/dist/ReactToastify.css";
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

:root{
    --toastify-color-light: ${({ theme }) => theme.color.black1};
    --toastify-color-success: ${({ theme }) => theme.color.green1};
    --toastify-color-error: ${({ theme }) => theme.color.orange1};
    --toastify-text-color-light: ${({ theme }) => theme.color.white1};

    .Toastify__toast{
        border-radius: 0.5rem;
    }  

    .Toastify__close-button{
        color: ${({ theme }) => theme.color.white1};
    }

    .Toastify__close-button > svg{
        color: ${({ theme }) => theme.color.white1};
    }
}

button{
    cursor: pointer;
}
`;
