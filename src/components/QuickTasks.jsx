import Link from 'next/link'
import React from 'react'
import TaskCard from './TaskCard'

const QuickTasks = () => {
  return (
    <div className='bg-profilebg lg:px-10 px-5 pt-20'>
          <div className='flex items-center gap-5'>
            <h1 className='lg:text-[2rem] text-white font-bold '>Quick tasks</h1>
            <Link className='text-white text-[1rem]' href="">view all</Link>
          </div>
        <TaskCard/>
    </div>
  )
}

export default QuickTasks