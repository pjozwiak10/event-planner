import { useMemo } from 'react';
import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject } from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | null;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:5000/graphql',
      credentials: 'include',
    }),
    cache: new InMemoryCache({
      typePolicies: {
        User:{
          keyFields: ['id']
        }
      }
    }),
  });
}

export const initializeApollo = (initialState: any = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export const useApollo = (initialState: any) => {
  const client = useMemo(() => initializeApollo(initialState), [initialState]);
  return client;
}