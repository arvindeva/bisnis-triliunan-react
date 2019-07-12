import React from 'react';
import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

const StyledSearchPlaceholder = styled.div`
  .heading {
    margin-top: 1rem;
    background: #e0e0e0;
    height: 1rem;
    width: 10rem;
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  .gradient {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(
      to right,
      #eeeeee 10%,
      #dddddd 18%,
      #eeeeee 33%
    );
    background-size: 800px 104px;
    height: 1rem;
    position: relative;
  }
`;

const Card = styled(AntdCard)`
  height: 400px;
  margin: 1rem 0;
  border-radius: 1rem;
`;

const SearchPlaceholder = () => {
  return (
    <StyledSearchPlaceholder>
      <div className="heading">
        <div className="gradient" />
      </div>
      <Card />
    </StyledSearchPlaceholder>
  );
};

export default SearchPlaceholder;
