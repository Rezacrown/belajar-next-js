'use client'
import Link from 'next/link';
import React from 'react';

import {TbSnowman} from 'react-icons/tb'

const Navigation = () => {
    return ( 
        <div className="">
            <nav className='flex justify-between px-20 py-10 pt-10 pb-6 text-white bg-gray-800'>
                <div className="">
                    <TbSnowman className='p-1 mx-auto text-4xl bg-teal-200 rounded-full text-zinc-600' />
                    <i className='font-medium underline -translate-y-2 underline-offset-[10px] text-sky-50'>STech.id</i>
                </div>

                
                <div className="">
                    <ul className='flex items-center justify-center text-xl translate-y-2 gap-x-5'>
                        <Link href='/h'>Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/blog'>My Blog</Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;