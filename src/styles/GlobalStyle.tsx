import { css, Global } from '@emotion/react';
import React from 'react';

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      html {
        width: 100%;
        height: 100%;
        font-size: 14px;
      }
      :focus {
        outline: none;
        border: none;
      }
    `}
  />
);

export default GlobalStyle;
