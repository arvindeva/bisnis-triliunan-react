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
  }
`;

const Logo = () => (
  <StyledLogo>
    <Link href="/">
      <a>MAULAPP</a>
    </Link>
  </StyledLogo>
);

export default Logo;
