import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #ff403a;
`;

const NavBar = () => {
  return <StyledNavBar />;
};

export default NavBar;
