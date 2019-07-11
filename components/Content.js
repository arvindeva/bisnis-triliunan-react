import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 1rem;
`;

export const Content = ({ children }) => (
  <StyledContent>{children}</StyledContent>
);
