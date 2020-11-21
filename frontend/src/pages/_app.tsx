import { AppProps } from "next/dist/next-server/lib/router/router";
import { ApolloProvider } from '@apollo/client';
import React from 'react';

import { useApollo } from '../lib/apolloClient';
import Layout from "../components/layout/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default App

