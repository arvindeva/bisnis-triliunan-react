import React from 'react';
import Head from 'next/head';

import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Bisnis Triliunan</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
