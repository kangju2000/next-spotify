import { ThemeProvider } from '@emotion/react';
import Layout from 'components/Layout/Layout';
import { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
