import React from 'react';
import styled from 'styled-components';

import { Flex, Box } from 'grid-styled';

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  @media screen and (max-width: 1100px) {
    margin: 0 10px;
  }
`;

export const Row = (props) => {
  return (
    <Flex
      {...props}
      mx={-1}
    />
  );
};

export const Col = (props) => {
  return (
    <Box
      {...props}
      px={1}
    />
  );
};
