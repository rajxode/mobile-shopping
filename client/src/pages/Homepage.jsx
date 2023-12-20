
import React from 'react';

function Homepage() {
  return (
    <div className='w-full px-[5%] flex justify-around py-[3%]'>
      <div className='w-1/5 px-2 flex flex-col justify-between'>
        <div className="w-full border flex justify-between p-2">
          <input 
            type="text"
            placeholder='Search here...' 
            className='focus:outline-none w-4/5'
            />
          <button className='border-l px-2'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="w-full">
          Filters
        </div>
      </div>
      <div className='w-[70%]'>
        Second
      </div>
    </div>
  )
}

export default Homepage;