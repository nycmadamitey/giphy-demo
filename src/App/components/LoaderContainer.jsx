import styled from 'styled-components';
import { Colors } from '../constants';

const LoaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.whitesmoke};
`;

export default LoaderContainer;
