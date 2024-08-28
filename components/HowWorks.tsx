import Image from "next/image";
import React from "react";

const HowWorks = () => {
  return (
    <section className="my-32 container flex items-center justify-center flex-col">
      <hr className="h-1 w-10 bg-black mb-5" />
      <h2 className="font-bold text-3xl mb-5">
        Visual representation of the process
      </h2>
      <div className="w-full px-10">
        <Image
          src={"/images/banner.png"}
          alt="Banner"
          width={1000}
          height={1000}
          className="w-full drop-shadow-xl hover:drop-shadow-2xl transition-all hover:ease-in ease-out"
        />
      </div>
      <div className="flex flex-col items-start justify-center my-20 w-full">
        <h3 className="font-semibold text-left text-2xl lg:text-4xl">
          Who can use this system ?
        </h3>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full mt-10 px-10 gap-5">
          <ul className="list-disc">
            <li className="text-lg lg:text-xl py-1">Banks</li>
            <li className="text-lg lg:text-xl py-1">Healthcare</li>
            <li className="text-lg lg:text-xl py-1">Restaurant</li>
            <li className="text-lg lg:text-xl py-1">Airport</li>
            <li className="text-lg lg:text-xl py-1">Services Companies</li>
            <li className="text-lg lg:text-xl py-1">and more.</li>
          </ul>
          <Image
            src={"/images/explination.png"}
            alt="explaination"
            width={1000}
            height={1000}
            className="w-full lg:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
