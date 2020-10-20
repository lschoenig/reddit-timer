import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.background};
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.color.primary};
    width: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.color.secondary};
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: 38px;
    font-weight: normal;
  }
`;

const mainTheme = {
  color: {
    background: '#ffffff',
    primary: '#93918f',
    secondary: '#000000',
    navigation: '#636363',
  },
  font: {
    primary: "'Montserrat', san-serif",
    secondary: "'Bitter', serif",
    size: {
      small: '14px',
    },
  },
  button: {
    background: '#fdb755',
    color: '#ffffff',
  },
};

export { GlobalStyle, mainTheme as default };
