import { AppProps } from "next/dist/next-server/lib/router/router";
import { ApolloProvider } from '@apollo/client';
import React from 'react';

import { useApollo } from '../lib/apolloClient';
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import useWindowSize from "../hooks/useWindowSize";
import { MediaContextProvider } from "../utils/createAppMedia";
import { WindowSizeContext } from "../utils/createWindowSizeContext";

let windowSizeContextValue: null | { width: number, height: number } = null;

const App = ({ Component, pageProps, router }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  if (typeof window !== 'undefined') {
    windowSizeContextValue = useWindowSize();
  };

  return (
    <ApolloProvider client={apolloClient}>
      <WindowSizeContext.Provider value={windowSizeContextValue}>
        <ThemeProvider theme={theme}>
          <MediaContextProvider>
            <Layout router={router}>
              <Component {...pageProps} />
            </Layout>
          </MediaContextProvider>
        </ThemeProvider>
      </WindowSizeContext.Provider>
    </ApolloProvider>
  )
}

export default App;

