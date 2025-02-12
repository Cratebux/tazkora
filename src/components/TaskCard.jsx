import rucci from '../../public/images/rucci.png'
import rts from '../../public/images/rt3.png'
import quantum from '../../public/images/quantum.png'
import trix from '../../public/images/trix.png'
import Image from 'next/image'


const TaskCard = () => {
  const data = [{
    id: 1,
    image: rucci,
    task: "Search, follow &...",
    task2: "Search for an article, sign...",
    price: '100',
    quota: "78/200"
  },
  {
    id: 2,
    image: trix,
    task: "Search, follow &...",
    task2: "Search for an article, sign...",
    price: '100',
    quota: "78/200"
  },
  {
    id: 3,
    image: quantum,
    task: "Search, follow &...",
    task2: "Search for an article, sign...",
    price: '100',
    quota: "78/200"
  },
  {
    id: 4,
    image: rts,
    task: "Search, follow &...",
    task2: "Search for an article, sign...",
    price: '100',
    quota: "78/200"
  },
  {
    id: 5,
    image: rucci,
    task: "Search, follow &...",
    task2: "Search for an article, sign...",
    price: '100',
    quota: "78/200"
  }]
  return (
    <div className='lg:flex gap-5 items-center grid grid-cols-2 lg:justify-between pt-10'>
        {
            data.map((items) => (
                <div key={items.id} className='lg:w-[220] w-[173.76px] rounded-t-[1.4rem] bg-itembg'>
                    <Image alt='image' className='w-full lg:h-[150] h-[100.65px]' src={items.image}/>
                    <div className='px-5 text-white'>
                        <h1 className='text-[1rem] font-bold pt-5'>{items.task}</h1>
                        <p className='text-[.9rem]'>{items.task2}</p>
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