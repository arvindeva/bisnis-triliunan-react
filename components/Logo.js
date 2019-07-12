import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLogo = styled.div`
  a {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    transition: 0.2s;
    &:hover {
      font-size: 10rem;
      transition: 0.2s;
      color: red;
    }
  }
`;

const Logo = () => (
  <StyledLogo>
    {/* <Link href="/"> */}
    <a href="https://block.myrepublic.co.id/" target="_blank">MAULAPP</a>
    {/* </Link> */}
  </StyledLogo>
);

export default Logo;
