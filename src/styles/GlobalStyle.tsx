import { css, Global } from '@emotion/react';
import { Global as MantineGlobal } from '@mantine/core';
import emotionReset from 'emotion-reset';

const GlobalStyle = () => (
  <>
    <Global
      styles={css`
        ${emotionReset}
        *, *::before, *::after {
          box-sizing: border-box;
          outline: none;
          font-family: 'Noto Sans KR', sans-serif;
        }
        html {
          width: 100%;
          height: 100%;
          font-size: 14px;
        }
        body {
          font-family: 'Noto Sans KR', sans-serif;
        }
        @font-face {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 100;
          src: url(/fonts/NotoSansKR-Thin.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Thin.woff) format('woff'),
            url(/fonts/NotoSansKR-Thin.otf) format('opentype');
        }
        @font-face {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 300;
          src: url(/fonts/NotoSansKR-Light.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Light.woff) format('woff'),
            url(/fonts/NotoSansKR-Light.otf) format('opentype');
        }
        @font-face {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts/NotoSansKR-Regular.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Regular.woff) format('woff'),
            url(/fonts/NotoSansKR-Regular.otf) format('opentype');
        }
        @font-face {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 500;
          src: url(/fonts/NotoSansKR-Medium.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Medium.woff) format('woff'),
            url(/fonts/NotoSansKR-Medium.otf) format('opentype');
        }
        @font-face {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 700;
          src: url(/fonts/NotoSansKR-Bold.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Bold.woff) format('woff'),
            url(/fonts/NotoSansKR-Bold.otf) format('opentype');
        }
        @font-face {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 900;
          src: url(/fonts/NotoSansKR-Black.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Black.woff) format('woff'),
            url(/fonts/NotoSansKr/NotoSansKR-Black.otf) format('opentype');
        }
      `}
    />
    <MantineGlobal
      styles={[
        {
          '@font-face': {
            fontFamily: 'Noto Sans KR',
            fontStyle: 'normal',
            fontWeight: 100,
            src: `url(/fonts/NotoSansKR-Thin.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Thin.woff) format('woff'),
            url(/fonts/NotoSansKR-Thin.otf) format('opentype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Noto Sans KR',
            fontStyle: 'normal',
            fontWeight: 300,
            src: `url(/fonts/NotoSansKR-Light.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Light.woff) format('woff'),
            url(/fonts/NotoSansKR-Light.otf) format('opentype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Noto Sans KR',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `url(/fonts/NotoSansKR-Regular.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Regular.woff) format('woff'),
            url(/fonts/NotoSansKR-Regular.otf) format('opentype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Noto Sans KR',
            fontStyle: 'normal',
            fontWeight: 500,
            src: `url(/fonts/NotoSansKR-Medium.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Medium.woff) format('woff'),
            url(/fonts/NotoSansKR-Medium.otf) format('opentype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Noto Sans KR',
            fontStyle: 'normal',
            fontWeight: 700,
            src: `url(/fonts/NotoSansKR-Bold.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Bold.woff) format('woff'),
            url(/fonts/NotoSansKR-Bold.otf) format('opentype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Noto Sans KR',
            fontStyle: 'normal',
            fontWeight: 900,
            src: `url(/fonts/NotoSansKR-Black.woff2) format('woff2'),
            url(/fonts/NotoSansKR-Black.woff) format('woff'),
            url(/fonts/NotoSansKr/NotoSansKR-Black.otf) format('opentype')`,
          },
        },
      ]}
    />
  </>
);

export default GlobalStyle;
