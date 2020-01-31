import React from 'react';

function SearchResults(props) {
  return (
    <div>
      {props.results && props.results.map(item => {
        return(
          <img
            key={item.id}
            src={item.images['fixed_height'].url}
            alt={item.title}
          />
        )
      })}

      {!props.results.length &&
        <div>
          No results for your search term. Please try again.
        </div>
      }
    </div>
  );
}

export default SearchResults;
