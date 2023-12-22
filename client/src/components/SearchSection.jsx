

import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { productSelector, setSearch } from '../reducer/productReducer';


function SearchSection() {

  const dispatch = useDispatch();
  const { search } = useSelector(productSelector);

  return (
    <div className="w-full flex flex-col justify-between mb-2">
      <div className="mb-2 font-semibold">
        Search
      </div>
      <div className="w-full border flex justify-between p-2">
        <input 
          type="text"
          placeholder='Search here...' 
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className='focus:outline-none w-4/5'
          />
        <button className='border-l px-2'>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchSection;