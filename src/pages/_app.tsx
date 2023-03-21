import { ThemeProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClientProvider, QueryClient, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { AppProps, AppContext } from 'next/app';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import type { MutableSnapshot } from 'recoil';
import Layout from 'components/common/Layout';
import PageLoading from 'components/common/PageLoading';
import { loginDataState, playbackDataState } from 'recoil/atoms';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

interface MyAppProps extends AppProps {
  loginData?: SpotifyApi.UserProfileResponse;
  playbackData?: SpotifyApi.CurrentPlaybackResponse;
}

function App({ Component, pageProps, loginData, playbackData }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient());

  queryClient.setDefaultOptions({
    queries: {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  });

  const initializer = ({ set }: MutableSnapshot) => {
    if (loginData) set(loginDataState, loginData);
    if (playbackData) set(playbackDataState, playbackData);
  };

  return (
    <RecoilRoot initializeState={initializer}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Hydrate state={pageProps.dehydratedState}>
          <MantineProvider
            withNormalizeCSS
            theme={{
              fontFamily: 'Noto Sans KR',
            }}
          >
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Notifications position="bottom-center" />
              <Layout>
                <PageLoading />
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </MantineProvider>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  let pageProps = {};
  let loginData: SpotifyApi.UserProfileResponse | null;
  let playbackData: SpotifyApi.CurrentPlaybackResponse | null;

  const accessToken = getCookie('access_token', ctx);
  const refreshToken = getCookie('refresh_token', ctx);

  if (!refreshToken) {
    return { pageProps, loginData: null, playbackData: null };
  }

  try {
    const loginDataResponse = await axios<SpotifyApi.UserProfileResponse>({
      method: 'get',
      url: 'https://api.spotify.com/v1/me',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const PlaybackDataResponse = await axios<SpotifyApi.CurrentPlaybackResponse>({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/player',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    loginData = loginDataResponse.data;
    playbackData = PlaybackDataResponse.data;
  } catch {
    loginData = null;
    playbackData = null;
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, loginData, playbackData };
};

export default App;
