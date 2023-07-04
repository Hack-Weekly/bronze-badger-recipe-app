import React, {useState} from 'react';

const Search = ((props) => {
  // const typeRef = useRef();
  const [searchType, setSearchType] = useState('select a type');
  const [searchInput, setSearchInput] = useState('');

  // const [inputState, dispatchInput] = useReducer(inputReducer, {value: ''});

  const typeChangeHandler = (event) => {
    setSearchType(event.target.value);
  };
  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    props.query(searchType, searchInput);
  };

  return (
    <>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search..."
          onChange={inputChangeHandler}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <select
            id="type"
            name="type"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            onChange={typeChangeHandler}
          >
            <option disabled="disabled" selected="selected">{`------${searchType}------`}</option>
            <optgroup label='Search'>
              <option value={'1a'}>by cocktail name</option>
              <option value={'1b'}>by ingredient name</option>
            </optgroup>
            <optgroup label='Lookup'>
              <option value={'2a'}>by cocktail id</option>
              <option value={'2b'}>by ingredient id</option>
            </optgroup>
            <optgroup label='Filter'>
              <option value={'3a'}>by ingredient</option>
              <option value={'3b'}>by category</option>
              <option value={'3c'}>by glass</option>
            </optgroup>
          </select>
        <button onClick={clickHandler} type="submit">GO</button>
        <button>Surprise Me!</button>
        </div>
      </div>
    </>
  )
});

export default Search;