import Image from "next/image";
import data from "../data";

const RecommendedTask = () => {
  return (
    <div className="py-10">
      <div className="flex items-center gap-5 text-white">
        <h1 className="text-[1rem] font-semibold lg:text-[2rem]">
          Recommended For You
        </h1>
        <p className="text-[1rem]">view all</p>
      </div>
      <div className="grid grid-cols-2 items-center gap-5 pt-10 lg:grid-cols-3 lg:justify-between">
      {data.slice(0, 3).map((items) => (
        <div key={items.id} className="rounded-[1.4rem] bg-itembg lg:w-[220]">
          <Image
            alt="image"
            className="h-[100.65px] w-full rounded-t-[1.4rem] object-cover lg:h-[150]"
            src={items.image}
          />
          <div className="px-2 pb-2 text-white">
            <h1 className="pt-3 lg:text-[1rem] text-[.8rem] font-bold">{items.task}</h1>
            <p className="lg:text-[.7rem] text-[.5rem]">{items.task2}</p>
            <div className="flex items-center lg:justify-between gap-3 lg:gap-0 pb-2 pt-3">
              <p className="lg:rounded rounded-full bg-gray-500 px-3 py-1 lg:text-[.8rem] text-[.6rem] font-bold lg:px-5 lg:py-2">
                ₦{items.price}
              </p>
              <div className="text-right">
                <p className="text-[.6rem] hidden lg:flex">Available Quota</p>
                <h1 className="text-[.6rem] font-bold lg:text-[.8rem]">
                  {items.quota}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RecommendedTask;
