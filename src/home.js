import React, { useState } from 'react'
import { Navbar } from './components/navbar'
import { LeftSlideBlock } from './components/leftSlideBlock'

export const Home = () => {

  return (
    <div className='w-[1440px] h-[810px] flex relative justify-between bg-[#FDE3D9]'>
        <div className="">
          <div className="absolute top-[359px] ml-[60px] w-[571px]">
            <h1 className='text-[#3E3E3E] text-[42px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad deleniti inventore omnis.</h1>

            <p className="text-[16px] text-[#6D6D6D] mt-4 w-[440px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi soluta consequatur minima. Inventore corporis sequi cumque, reiciendis harum velit neque aut? Aliquam, perspiciatis quos.</p>

            <div className="h-[53px] w-[160px] flex mt-14">
              <img className='w-[160px] h-[53px] p-2' src="./AppStoreBadge.png" alt="" />
              <img className='w-[207px] h-[53px]' src="./google-play-badge.png" alt="" />
            </div>
          </div>
        </div>
        <div className='w-[720px] h-[810px] relative'>
          <LeftSlideBlock />
        </div>
    </div>
  )
}
