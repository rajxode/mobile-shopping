
import React, { useState } from 'react';


function SingleProduct(props) {

    const { product } = props;
    const [ addFav , setAddFav ] = useState(false);

    return (
        <div className='w-[250px] h-[350px] bg-slate-100 flex flex-col mx-2 my-3 p-1 justify-between rounded shadow hover:bg-slate-300'>
            <div className='w-full h-[290px] bg-blue-500'> 
                <img src={product.thumbnail} alt="logo" className='w-full h-full cursor-pointer' />
            </div>
            <div className='w-full h-[50px] flex rounded overflow-hidden'>
                <div className='w-1/5 border cursor-pointer bg-white shadow flex justify-center items-center text-lg hover:bg-red-300 hover:text-white'>
                    {
                        addFav
                        ?
                        <span className='text-red-600' onClick={(e) => setAddFav(!addFav)}>
                            <i class="fa-solid fa-heart"></i>
                        </span>
                        :
                        <span onClick={(e) => setAddFav(!addFav)}>
                            <i class="fa-regular fa-heart"></i>
                        </span>
                    }
                </div>
                
                <div className='w-3/5 border flex justify-center items-center bg-white shadow font-semibold text-center hover:bg-slate-300'>
                    {product.title}
                </div>
                
                <div className='w-1/5 border cursor-pointer bg-white shadow flex justify-center items-center text-lg hover:bg-blue-300 hover:text-white'>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;