import App, { Container } from 'next/app';
import React from 'react';
import GlobalStyle from '../lib/globalStyle';

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    );
  }
}
