
import React from 'react';
import SearchSection from './SearchSection';
import Ram from './Ram';
import Processor from './Processor';
import OperatingSystem from './OperatingSystem';
import Brand from './Brand';

// filter products on differnet basis
function FilterSection(props) {
  
  const { setRam, setOs, setPro, setBrand} = props;

  return (
    <div className='w-1/2 sm:w-1/3 bg-white left-0 md:w-1/5 h-fit px-2 flex flex-col justify-between'>
      {/* search */}
        <SearchSection />
      {/* ram */}
        <Ram setRam={setRam} />
      {/* processor */}
        <Processor setPro={setPro} />
      {/* OS */}
        <OperatingSystem setOs={setOs} />
      {/* brand */}
        <Brand setBrand={setBrand} />
    </div>
  )
}

export default FilterSection;