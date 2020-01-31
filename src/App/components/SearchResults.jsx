import React from 'react';

function SearchResults(props) {
  return (
    <div>
      {props.results && props.results.map(item => {
        return(
          <p key={item}>{item}</p>
        )
      })}

      {!props.results &&
        <div>
          No results for your search term. Please try again.
        </div>
      }
    </div>
  );
}

export default SearchResults;
