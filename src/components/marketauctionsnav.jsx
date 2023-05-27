import React from 'react'
import arrow from '../assets/arrow.svg'
import arrowmb from '../assets/mobile-arrow.svg'

const Marketauctionsnav = () => {
  return (
    <div className='flex flex-col py-[100px] md:py-[180px] gap-y-3'>
        <hr className='h-[1px] bg-black' />
        <div className='flex items-center px-4  justify-between md:w-[715px] xl:w-[1068px] md:m-auto'>
            <p className='text-2xl max-[280px]:text-base md:text-3xl lg:text-[48px] font-medium leading-[65px] text-[#333333]'>Explore marketplace</p>
            <img src={arrow} className='w-[81px] hidden md:block' alt="" />
            <img src={arrowmb} className='w-[60px] md:hidden' alt="" />
        </div>
        <hr className='h-[1px] bg-black' />
        <div className='flex items-center px-4 justify-between md:w-[715px] xl:w-[1068px] md:m-auto'>
            <p className='text-2xl max-[280px]:text-base md:text-3xl lg:text-[48px] font-medium leading-[65px] text-[#333333]'>See auctions</p>
            <img src={arrow} className='w-[81px] hidden md:block' alt="" />
            <img src={arrowmb} className='w-[60px] md:hidden' alt="" />
        </div>
        <hr className='h-[1px] bg-black' />
    </div>
  )
}

export default Marketauctionsnav