import React from 'react';
import styled from 'styled-components';
import { Colors } from '../constants';
import { ReactComponent as SearchIcon } from '../images/search-icon.svg';

const SearchButton = styled.button`
  height: 45px;
  padding: 0 5px;
  border: 2px solid ${Colors.lightBlue};
  cursor: pointer;
  outline: none;
`;

export default () => (
  <SearchButton type="submit">
    <SearchIcon />
  </SearchButton>
);
