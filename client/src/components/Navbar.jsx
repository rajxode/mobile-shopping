
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';


const MenuLink = styled.div`
    display:flex;
    cursor:pointer;
    font-weight:600;
    align-items:center;
`;


function Navbar() {
    return (
        <>
            <div className='w-full h-[65px] bg-slate-100 flex justify-around px-[5%] items-center'>
                <div className='text-xl font-semibold'>
                    Buy Phone
                </div>
                
                <div className='w-1/2 h-full flex justify-around items-center'>
                    <MenuLink className='group relative'>
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
                
                <div className='w-[15%] h-full flex justify-around items-center'>
                    <MenuLink>
                        <i class="fa-solid fa-magnifying-glass"></i>
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
            </div>
            <Outlet />
        </>
    )
}

export default Navbar;