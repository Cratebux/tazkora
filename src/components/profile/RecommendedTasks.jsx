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
      <div className="grid grid-cols-2 items-center gap-5 pt-10 lg:flex">
        {data.slice(0, 3).map((items) => (
          <div
            key={items.id}
            className="w-[173.76px] rounded-t-[1.4rem] bg-itembg lg:w-[220]"
          >
            <Image
              alt="image"
              className="h-[100.65px] w-full rounded-t-[1.4rem] object-cover lg:h-[150]"
              src={items.image}
            />
            <div className="px-5 text-white">
              <h1 className="pt-5 text-[1rem] font-bold">{items.task}</h1>
              <p className="text-[.7rem]">{items.task2}</p>
              <div className="flex items-center justify-between pb-2 pt-3">
                <p className="rounded bg-gray-500 px-5 py-2 text-[.8rem] font-bold">
                  ₦{items.price}
                </p>
                <div className="text-right">
                  <p className="text-[.6rem]">Available Quota</p>
                  <h1 className="text-[.6rem] font-bold lg:text-[1rem]">
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
