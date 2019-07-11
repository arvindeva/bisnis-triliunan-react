import App, { Container } from 'next/app';
import React from 'react';
import GlobalStyle from '../lib/globalStyle';
import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
