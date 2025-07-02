import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: string }>`
  body {
    background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
`;
