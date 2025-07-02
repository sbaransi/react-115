import { createGlobalStyle } from 'styled-components';

const colors = {
    light: { bg: "#fff", color: "#000" },
    dark: { bg: "#333", color: "#fff" }
}

export const GlobalStyles = createGlobalStyle<{ theme: string }>`
  body {
    background-color: ${({ theme }) => (colors[theme].bg)};
    color: ${({ theme }) => (colors[theme].color)};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
`;
