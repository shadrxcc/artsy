import React from 'react'
import creator1 from '../assets/creator1.svg'
import creator2 from '../assets/creator2.svg'
import creator3 from '../assets/creator3.svg'
import creator4 from '../assets/creator4.svg'
import creator5 from '../assets/creator5.svg'

export const Creators64 = () => {
  return (
    <div>
        <div className='flex h-10 items-center -space-x-5 md:w-1/3'>
            <img className='w-[38px] md:w-12' src={creator1} alt="" />
            <img className='w-[38px] md:w-12' src={creator2} alt="" />
            <img className='w-[38px] md:w-12' src={creator3} alt="" />
            <img className='w-[38px] md:w-12' src={creator4} alt="" />
            <img className='w-[38px] md:w-12' src={creator5} alt="" />
        </div>
    </div>
  )
}