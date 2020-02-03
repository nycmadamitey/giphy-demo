import React, { useState } from 'react';
import SearchResults from './SearchResults';
import { ApiLink, ApiKey } from '../constants';
import InputContainer from './InputContainer';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import LoaderContainer from './LoaderContainer';
import ErrorText from './ErrorText';
import { ReactComponent as Loader } from '../images/loader.svg';

function SearchForm() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [serverError, setServerError] = useState(false);
  const rootElement = document.getElementById('root');

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
      `${ApiLink}${term}&api_key=${ApiKey}&limit=24`
    )
      .then(response => response.json())
      .then(response => {
        setResults(response.data);
        rootElement.classList.add('top-align');
        setIsLoading(false);
        setShowResults(true);
      })
      .catch(error => {
        setIsLoading(false);
        setServerError(true);
      });
  }

  return (
    <>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <InputContainer>
          <SearchInput
            type="text"
            value={term}
            onChange={handleInputChange}
            placeholder="Enter term for gifs"
            required
          />
          <SearchButton />
        </InputContainer>
      </form>

      {isLoading &&
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      }
      {showResults && <SearchResults results={results} />}
      {serverError &&
        <ErrorText>Oops! Something went wrong. Refresh and try again.</ErrorText>
      }
    </>
  );
}

export default SearchForm;
