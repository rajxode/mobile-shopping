

import React from 'react';

function OperatingSystem(props) {

  const { setOs } = props;
    
  return (
    <div className="w-full flex flex-col justify-between mb-2">
      <div className="mb-2 font-semibold">
        Operating System
      </div>
      <div>
        <input type="radio" name="os" id="os_0" value="" className='cursor-pointer' onClick={(e) => setOs('')} />
        &nbsp;
        <label htmlFor="os_0">None</label>
        <br />
        <input type="radio" name="os" id="os_1" value="apple" className='cursor-pointer' onClick={(e) => setOs(e.target.value)} />
        &nbsp;
        <label htmlFor="os_1">Apple iOS</label>
        <br />
        <input type="radio" name="os" id="os_2" value="google" className='cursor-pointer' onClick={(e) => setOs(e.target.value)} />
        &nbsp;
        <label htmlFor="os_2">Google</label>
        <br />
        <input type="radio" name="os" id="os_3" value="android" className='cursor-pointer' onClick={(e) => setOs(e.target.value)} />
        &nbsp;
        <label htmlFor="os_3">Android</label>
        <br />
      </div>
    </div>
  )
}

export default OperatingSystem;