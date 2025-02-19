import Link from 'next/link'
import React from 'react'
import PartnerCard from './PartnerCard'

const Partners = () => {
  return (
    <div className='bg-profilebg lg:px-10 px-5 pt-10'>
        <div className='flex items-center gap-5'>
          <h1 className='lg:text-[2rem] text-white font-bold '>Partners</h1>
          <Link className='text-white text-[1rem]' href="">view all</Link>
        </div>
        
        <PartnerCard/>
    </div>
  )
}

export default Partners