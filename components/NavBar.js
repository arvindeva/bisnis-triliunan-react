import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Logo from './Logo';
import NavLinks from './NavLinks';

const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #1890ff;
  /* background-color: black; */

  z-index: 10;
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;

  img {
    height: 60px;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      transform: scale(2);
      transition: 0.1s;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <div className="wrapper">
        <Logo />
        {/* <Link href="/">
          <img src="/static/maulapp.gif" alt="my image" />
        </Link> */}
        <NavLinks />
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
