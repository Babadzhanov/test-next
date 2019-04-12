import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      background-color: #f1f1f1;
    }

    * {
        font-family: 'Barlow', sans-serif;
    }

  `;

export const H1 = styled.h1`
  color: gray;
  display: flex;
  justify-content: center;
`;
