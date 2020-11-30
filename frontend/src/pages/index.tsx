import React from 'react';
import { HelloDocument } from '../generated/graphql';
import { initializeApollo } from '../lib/apolloClient';

const Home = (props: any) => {
  console.log(props);
  return (
    <>
      <div>{props.initialApolloState.ROOT_QUERY.hello}</div>
      <div>elo</div>
    </>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HelloDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1,
  }
}

export default Home;


