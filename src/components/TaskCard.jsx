import Image from 'next/image'
import data from '../components/data'


const TaskCard = () => {
  return (
    <div className='lg:flex gap-5 items-center grid grid-cols-2 lg:justify-between pt-10'>
        {
            data.map((items) => (
                <div key={items.id} className='lg:w-[220] w-[173.76px] rounded-t-[1.4rem] bg-itembg'>
                    <Image alt='image' className='w-full lg:h-[150] rounded-t-[1.4rem] h-[100.65px] object-cover' src={items.image}/>
                    <div className='px-5 text-white'>
                        <h1 className='text-[1rem] font-bold pt-5'>{items.task}</h1>
                        <p className='text-[.7rem]'>{items.task2}</p>
                        <div className='flex justify-between items-center pt-3 pb-2'>
                            <p className='bg-gray-500 text-[.8rem] font-bold rounded py-2 px-5'>₦{items.price}</p>
                            <div className='text-right'>
                                <p className='text-[.6rem]'>Available Quota</p>
                                <h1 className='font-bold'>{items.quota}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default TaskCard