
import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import FilterSection from '../components/FilterSection';
import { getProductThunk, productSelector } from '../reducer/productReducer';
import SingleProduct from '../components/SingleProduct';

// homepage of website
function Homepage() {

  const dispatch = useDispatch();
  const { products , search }  = useSelector(productSelector);
  
  // filter properties
  const [ram,setRam] = useState('');
  const [os,setOs] = useState('');
  const [pro,setPro] = useState('');
  const [brand,setBrand] = useState('');

  // get data from api on first render
  useEffect(() => {
    dispatch(getProductThunk());
  },[]);

  
  return (
    <div className='relative md:static w-full px-[2%] md:px-[3%] lg:px-[5%] flex justify-around py-[3%]'>
      
      {/* side filter section on page */}
      <FilterSection setRam={setRam}
                    setBrand={setBrand}
                    setOs={setOs}
                    setPro={setPro} />


      <div className='w-full md:w-[75%] flex flex-col'>
        
        {/* show each product by appling filters */}
        <div className='w-full flex flex-wrap'>
          {
            products
            // filter product by search
            .filter((product) => {
              return search.toLocaleLowerCase() === ''
              ? product
              :product.title.toLocaleLowerCase().includes(search)})
            // filter on the basis of ram
            .filter((product) => {
              return !ram
              ? product
              :product.ram === ram})
            // filter on the basis of operating system
            .filter((product) => {
              return !os
              ? product
              :product.operating === os})
            // filter product by brand name
            .filter((product) => {
              return !brand
              ? product
              :product.brand === brand})
            // filter product on the basis of processor
            .filter((product) => {
              return !pro
              ? product
              :product.processor === pro})
            // map over each element to show product card
            .map((product , i) => <SingleProduct key={i} product={product} /> )
            
          }
        </div>
      </div>
      
    </div>
  )
}

export default Homepage;