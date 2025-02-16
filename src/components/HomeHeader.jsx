import Image from "next/image"
import Link from "next/link"
import notification from '../../public/svg/notification.svg'
import user from '../../public/svg/user.svg'
import banner from '../../public/images/herobanner.png'

const Home = () => {
  return(
    <>

      <header className="lg:h-screen lg:bg-banner-bg  lg:mx-10 pt-5 bg-cover object-fit bg-no-repeat">
          {/* start of header */}
          <div className="flex justify-between lg:pb-0 pb-5 px-5">
            <h1 className="font-bold text-white text-3xl">Tazkora</h1>
            <div className="flex items-center gap-5">
                <button className="font-bold bg-blue-800 px-3 pb-1   text-white rounded-full text-2xl">+</button>
                <div className="bg-darkbg lg:px-5 gap-2 py-3 rounded-full  w-max flex">
                    <Link href={'/'}>
                        <Image
                            src={notification}
                            width={20}
                            height={20}
                            alt="bell"
                        />
                    </Link>
                    <Link href={'/'}>
                        <Image
                            src={user}
                            width={20}
                            height={20}
                            alt="bell"
                        />
                    </Link>
                </div>
            </div>
          </div>
          {/* end of header */}
          <div>
            <h1 className="hidden text-center h-screen items-center lg:grid justify-center text-[4rem] text-white font font-bold">Simple ways to make <br/>money online </h1>
          </div>
      </header>
          <div className="bg-banner-bg object-fit bg-cover h-[15rem] w-full">
            
          </div>
    </>
  )
};

export default Home