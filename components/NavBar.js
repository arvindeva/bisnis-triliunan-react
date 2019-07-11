import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import NavLinks from './NavLinks';

const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #4d13d1;
  z-index: 10;

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
        <NavLinks />
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
