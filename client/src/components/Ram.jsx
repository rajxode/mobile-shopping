
import React from 'react';

function Ram(props) {

  const {setRam} = props;

  return (
    <div className="w-full flex flex-col justify-between mb-2">
      <div className="mb-2 font-semibold">
        RAM
      </div>
      <div>
        <input type="radio" name="ram" id="ram_0" value='' className='cursor-pointer' onClick={(e) => setRam('')} />
        &nbsp;
        <label htmlFor="ram_0">None</label>
        <br />
        <input type="radio" name="ram" id="ram_1" value='2gb' className='cursor-pointer' onClick={(e) => setRam(e.target.value)} />
        &nbsp;
        <label htmlFor="ram_1">2GB</label>
        <br />
        <input type="radio" name="ram" id="ram_2" value='4gb' className='cursor-pointer' onClick={(e) => setRam(e.target.value)} />
        &nbsp;
        <label htmlFor="ram_2">4GB</label>
        <br />
        <input type="radio" name="ram" id="ram_3" value='6gb' className='cursor-pointer' onClick={(e) => setRam(e.target.value)} />
        &nbsp;
        <label htmlFor="ram_3">6GB</label>
        <br />
        <input type="radio" name="ram" id="ram_4" value='8gb' className='cursor-pointer' onClick={(e) => setRam(e.target.value)} />
        &nbsp;
        <label htmlFor="ram_4">8GB</label>
        <br />
        <input type="radio" name="ram" id="ram_5" value='12gb' className='cursor-pointer' onClick={(e) => setRam(e.target.value)} />
        &nbsp;
        <label htmlFor="ram_5">12GB</label>
      </div>
    </div>
  )
}

export default Ram;