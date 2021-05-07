import { createGlobalStyle, css } from 'styled-components';
import normalize from './normalize.css'
export const bodyStyles = css`
  font-family: 'Noto Sans', sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
${normalize}
body{
  ${bodyStyles}
}`;