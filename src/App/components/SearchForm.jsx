import React, { useState } from 'react';
import SearchResults from './SearchResults';
import { ApiLink, ApiKey } from '../constants';

function SearchForm() {
  const [term, setTerm] = useState('');
  const {results, setResults} = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchSearchResults();
    setIsLoading(true);
  }

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  }

  const fetchSearchResults = () => {
    fetch(
      `${ApiLink}${term}&api_key=${ApiKey}`
    )
      .then(response => response.json())
      .then(response => {
        setIsLoading(false);
        setShowResults(true);
        setResults(response.data);
        console.log('called', response);
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={term}
          onChange={handleInputChange}
          placeholder="Enter term for gifs"
          required
        />
        <input type="submit" value="Search" />
      </form>

      {isLoading && <p>Fetching results</p>}
      {showResults && <SearchResults results={results} />}
    </>
  );
}

export default SearchForm;
