import React from 'react';

function SearchResults(props) {
  return (
    <div>
      {props.results && props.results.map(item => {
        return(
          <a key={item.id} href={item.url}>
            <img
              src={item.images['fixed_height'].url}
              alt={item.title}
            />
          </a>
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
