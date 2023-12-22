

import React from 'react';


// to render and filter product based on differnet brands
function Brand(props) {

  const { setBrand } = props;
  
  return (
    <div className="w-full flex flex-col justify-between mb-2">
      <div className="mb-2 font-semibold">
        Brand
      </div>
      <div>
      <input type="radio" name="brand" id="brand_0" value="" className='cursor-pointer' onClick={(e) => setBrand('')} />
        &nbsp;
        <label htmlFor="brand_0">None</label>
        <br />
        <input type="radio" name="brand" id="brand_1" value="apple" className='cursor-pointer' onClick={(e) => setBrand(e.target.value)} />
        &nbsp;
        <label htmlFor="brand_1">Apple</label>
        <br />
        <input type="radio" name="brand" id="brand_2" value="google" className='cursor-pointer' onClick={(e) => setBrand(e.target.value)} />
        &nbsp;
        <label htmlFor="brand_2">Google Pixel</label>
        <br />
        <input type="radio" name="brand" id="brand_3" value="samsung" className='cursor-pointer' onClick={(e) => setBrand(e.target.value)} />
        &nbsp;
        <label htmlFor="brand_3">Samsung</label>
        <br />
        <input type="radio" name="brand" id="brand_4" value="oneplus" className='cursor-pointer' onClick={(e) => setBrand(e.target.value)} />
        &nbsp;
        <label htmlFor="brand_4">Oneplus</label>
        <br />
        <input type="radio" name="brand" id="brand_5" value="vivo" className='cursor-pointer' onClick={(e) => setBrand(e.target.value)} />
        &nbsp;
        <label htmlFor="brand_5">Vivo</label>
        <br />
      </div>
    </div>
  )
}

export default Brand;