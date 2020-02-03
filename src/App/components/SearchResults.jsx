import React from 'react';
import ResultsContainer from './ResultsContainer';
import Result from './Result';

function SearchResults(props) {
  return (
    <ResultsContainer>
      {props.results && props.results.map(item => {
        return(
          <Result key={item.id}>
            <a href={item.url}>
              <img
                src={item.images['fixed_height'].url}
                alt={item.title}
              />
            </a>
          </Result>
        )
      })}

      {!props.results.length &&
        <div>
          No results for your search term. Please try again.
        </div>
      }
    </ResultsContainer>
  );
}

export default SearchResults;
