import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledNavLinks = styled.div`
  a {
    color: white;
    padding: 0 1.5rem;
  }
`;

const ServiceButton = styled.button`
  background: transparent;
  color: white;
  font-family: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const NavLinks = () => {
  return (
    <StyledNavLinks>
      <Link href="/">
        <ServiceButton>List a Service</ServiceButton>
      </Link>
      <Link href="/">
        <a>Sign Up</a>
      </Link>
      <Link href="/signin">
        <a>Sign In</a>
      </Link>
    </StyledNavLinks>
  );
};

export default NavLinks;
