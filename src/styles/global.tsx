import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  html {
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
    font: 300 1rem 'Comic Neue', arial, sans-serif;
    body::-webkit-scrollbar {
      width: 10px;
    }
    body::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.salmon300};
      border-radius: 2px;
    }
  }

  @media (max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

  body{
    width: 100%;
    color: ${theme.colors.blue700};
    background-color: ${theme.colors.gray200};
    .button-link {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      margin: 15px;
      border: none;
      border-radius: 5px;
      color: ${theme.colors.blue700};
      font: 500 1.5rem arial;
      background-image: linear-gradient(45deg, ${theme.colors.salmon300}, ${theme.colors.salmon300});
      cursor: pointer;
      transition: ease-in-out all 0.5s;
      :hover {
        filter: brightness(150%);
      }
    }
  }
  body, input, textarea, select, button {
    font: 400 1rem 'Comic Neue', sans-serif;
  }
`;
