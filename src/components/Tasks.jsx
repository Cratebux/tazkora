import Link from 'next/link'
import React from 'react'
import TaskCard from './TaskCard'
import Image from 'next/image'
import filled from '../../public/svg/filled.svg'
import { Search } from 'lucide-react'

const Tasks = () => {
  return (
    <div className='bg-darkbg lg:px-10 px-5 pt-20'>
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-5'>
            <h1 className='lg:text-[2rem] text-white font-bold '>All Task</h1>
            <Link className='text-white text-[1rem]' href="">view all</Link>
          </div>
          <div className='lg:flex gap-5 hidden'>
            <div className='flex px-5 bg-background border py-2 rounded-md'>
                <input className='bg-darkbg outline-none text-white' placeholder='Search'/>
                <Search
                  color='white'
                />
            </div>
            <Image
              src={filled}
              alt='filled'
            />
          </div>
        </div>
        <TaskCard/>
        <TaskCard/>
        <button className='bg-blue-600 px-5 py-2 mx-auto flex mt-10 text-white rounded-full'>Load more</button>
    </div>
  )
}

export default Tasks