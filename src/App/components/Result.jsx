import styled from 'styled-components';
import { Breakpoints } from '../constants';

const Result = styled.div`
  width: 50%;
  padding: 0 0 8px 8px;
  height: 200px;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: ${Breakpoints.bigMobile}) {
    width: 33.33%;
  }

  @media screen and (min-width: ${Breakpoints.tablet}) {
    width: 25%;
  }
`;

export default Result;
