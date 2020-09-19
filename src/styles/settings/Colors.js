import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
    :root{
        
        --primary-button: #993E4E;
        --input-button: #000;

        --font-color: #F6F0ED;
        --font-color-title: #14110F;
       
        --background-low-opacity: #774936;
        --background-hight-opacity: #411d13;

        --background-card: #f83200;
        --background-container: #f57a00;
        
    }
`;

export default Colors;
