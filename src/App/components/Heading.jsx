import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../constants';

const Header = styled.header`
  text-align: center;
  padding-bottom: 35px;
`;

const Headline = styled.h1`
  font-size: 24px;
  padding-bottom: 15px;

  @media screen and (min-width: ${Breakpoints.tablet}) {
    font-size: 36px;
  }
`;

const SubHeading = styled.p`
  font-size: 18px;

  @media screen and (min-width: ${Breakpoints.tablet}) {
    font-size: 21px;
  }
`;

export default () => (
  <Header>
    <Headline>Giphy Search Engine</Headline>
    <SubHeading>Submit a search term to return gifs.</SubHeading>
  </Header>
);
