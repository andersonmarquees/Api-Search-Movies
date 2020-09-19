import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 10px;
        font-family: 'Poppins', sans-serif;
    }
    body {
        min-width: 320px;
        background: linear-gradient(to left, var(--background-low-opacity), var(--background-hight-opacity) 60%);
        color: var(--font-color);
    }
`;

export default Base;
