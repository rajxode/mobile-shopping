

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import styled from 'styled-components';
import { productSelector, setSearch } from '../reducer/productReducer';


const MenuLink = styled.div`
    display:flex;
    cursor:pointer;
    font-weight:600;
    align-items:center;
    &:hover{
        text-decoration:underline;
    }
`;


function Navbar() {

    const dispatch = useDispatch();
    const { search } = useSelector(productSelector);

    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className='w-full h-[65px] bg-slate-100 flex justify-between md:justify-around 
                    px-[2%] md:px-[3%] lg:px-[5%] items-center relative'>
                <div className='text-xl font-semibold'>
                    Buy Phone
                </div>
                
                <div className='hidden w-1/2 h-full md:flex justify-around items-center'>
                    <MenuLink>
                        Home
                        <span className='ml-1 font-thin'>
                            <i class="fa-solid fa-caret-down"></i>
                        </span>
                    </MenuLink>
                    <MenuLink>
                        Shop
                        <span className='ml-1 font-thin'>
                            <i class="fa-solid fa-caret-down"></i>
                        </span>
                    </MenuLink>
                    <MenuLink>
                        Collection
                    </MenuLink>
                    <MenuLink>
                        Contact Us
                    </MenuLink>
                </div>
                
                <div className='hidden w-1/5 lg:w-[15%] h-full md:flex justify-around items-center'>
                    <MenuLink className='relative h-full'>
                        <span onClick={(e) => setShowSearch(!showSearch)}>
                            {
                                showSearch
                                ?
                                    <i class="fa-solid fa-xmark"></i>
                                :
                                    <i class="fa-solid fa-magnifying-glass"></i>
                            }
                        </span>
                        {
                            showSearch
                            ?
                            <div className="absolute top-10 right-0 w-[225px] bg-white shadow border flex justify-between p-2">
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
                            :
                            null
                        }
                    </MenuLink>
                    <MenuLink>
                        <i class="fa-regular fa-user"></i>
                    </MenuLink>
                    <MenuLink>
                        <i class="fa-regular fa-heart"></i>
                    </MenuLink>
                    <MenuLink>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </MenuLink>
                </div>
                
                <div className='md:hidden font-bold text-xl p-1 px-2 hover:bg-white rounded hover:shadow 
                        cursor-pointer'
                    onClick={(e) => setShowMenu(!showMenu)}>
                    <i class="fa-solid fa-list"></i>
                </div>
                
                {
                    showMenu
                    ?
                    <div className='z-10 fixed top-0 right-0 w-1/2 bg-white h-screen flex flex-col items-center p-2 shadow-md'>
                        <div className="w-full mb-2">
                            <span className='px-2 py-1 hover:bg-slate-200 rounded-full cursor-pointer'
                                onClick={(e) => setShowMenu(!showMenu)}>
                                <i class="fa-solid fa-xmark"></i>
                            </span>
                        </div>
                        <div className="w-full bg-white shadow border flex justify-between p-2">
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
                        <div className="w-full h-1/4 flex flex-col justify-around">
                            <MenuLink>
                                Home
                                <span className='ml-1 font-thin'>
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </MenuLink>
                            <MenuLink>
                                Shop
                                <span className='ml-1 font-thin'>
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </MenuLink>
                            <MenuLink>
                                Collection
                            </MenuLink>
                            <MenuLink>
                                Contact Us
                            </MenuLink>
                        </div>
                        <div className="w-full h-1/5 flex flex-col justify-around">
                            <MenuLink>
                                <i class="fa-regular fa-user"></i>
                                &nbsp;
                                Profile
                            </MenuLink>
                            <MenuLink>
                                <i class="fa-regular fa-heart"></i>
                                &nbsp;
                                Favourite
                            </MenuLink>
                            <MenuLink>
                                <i class="fa-solid fa-cart-shopping"></i>
                                &nbsp;
                                Cart
                            </MenuLink>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
            <Outlet />
        </>
    )
}

export default Navbar;