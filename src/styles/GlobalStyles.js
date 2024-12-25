import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f8ff;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
  }

  h1 {
    color: #004080;
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
    background-color: #ffd700;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
  }

  button:hover {
    background-color: #ffa500;
  }
`;

export default GlobalStyles;
