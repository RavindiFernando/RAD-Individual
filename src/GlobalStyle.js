import { createGlobalStyle } from 'styled-components';
import background from './assets/background.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI';
    position: relative;
    height: 100vh;
    width: 100%;
  }

  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }

  body::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    background-color: ${({ theme }) => (theme === 'light' ? '#e6dbcc' : '#000000')};
    z-index: -1;
  }

  #root {
    height: 100%;
    position: relative;
    z-index: 1;
  }
`;

export default GlobalStyle;
