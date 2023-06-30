import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.COLORS.VERYLIGHTGRAY};

}

body, button {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 15px;
    outline: none;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}

`;