

import React from 'react';

// filter products on the basis of differnet operating system
function Processor(props) {

  const { setPro } = props;

  return (
    <div className="w-full flex flex-col justify-between mb-2">
      <div className="mb-2 font-semibold">
        Processor
      </div>
      <div>
        <input type="radio" name="processor" id="processor_0" value='' className='cursor-pointer' onClick={(e) => setPro('')}/>
        &nbsp;
        <label htmlFor="processor_0">None</label>
        <br />
        <input type="radio" name="processor" id="processor_1" value='snapdrgaon' className='cursor-pointer' onClick={(e) => setPro(e.target.value)}/>
        &nbsp;
        <label htmlFor="processor_1">SnapDragon</label>
        <br />
        <input type="radio" name="processor" id="processor_2" value= "mediatek" className='cursor-pointer' onClick={(e) => setPro(e.target.value)}/>
        &nbsp;
        <label htmlFor="processor_2">MediaTek</label>
        <br />
        <input type="radio" name="processor" id="processor_3" value="google" className='cursor-pointer' onClick={(e) => setPro(e.target.value)}/>
        &nbsp;
        <label htmlFor="processor_3">Google Tensor</label>
        <br />
        <input type="radio" name="processor" id="processor_4" value="apple" className='cursor-pointer' onClick={(e) => setPro(e.target.value)}/>
        &nbsp;
        <label htmlFor="processor_4">Apple A</label>
        <br />
        <input type="radio" name="processor" id="processor_5" value="exynos" className='cursor-pointer' onClick={(e) => setPro(e.target.value)}/>
        &nbsp;
        <label htmlFor="processor_5">Exynos</label>
        <br />
      </div>
    </div>
  )
}

export default Processor;