import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: -8px;
  margin-top: 35px;

  .no-results {
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
`;

export default ResultsContainer;
