import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import NavBar from './NavBar';

const Main = styled.div`
  padding-top: 100px;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>MAULAPP</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
