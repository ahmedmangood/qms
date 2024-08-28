import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <section className="flex items-center justify-center flex-col my-32">
      <div className="flex items-center justify-center relative">
        <Image
          src={"/icons/Group 96.svg"}
          alt="bollets"
          width={50}
          height={50}
          className="lg:w-24 animate-pulse absolute top-0 left-0"
        />
        <Image
          src={"/images/qms.png"}
          alt="qms"
          width={700}
          height={60}
          className="w-full drop-shadow-2xl"
        />
        <Image
          src={"/icons/Group 95.svg"}
          alt="bollets"
          width={50}
          height={50}
          className="lg:w-24 animate-pulse absolute bottom-0 right-0"
        />
      </div>

      <div className="bg-[#4C7380] text-white px-3 py-10 w-full">
        <div className="container flex items-start justify-center flex-col lg:w-[800px]">
          <hr className="h-1 bg-white w-10" />
          <h2 className="font-bold text-xl lg:text-2xl my-5">
            What is a Queue Management System?
          </h2>
          <p className="text-lg leading-8">
            Queue Management Systems (QMS) are designed to manage customer flow
            by improving process optimization and wait time reduction,
            streamlining the queuing experience. By integrating QMS technologies
            such as ticket dispensers, kiosks, call forwarding, and an automated
            scheduling system, customers will have a more relaxed waiting
            experience
          </p>
          <p className="text-lg leading-8">
            Unlocking efficiency with Queue Management Systems (QMS) enhances
            customer experience across industries like retail, banks,
            healthcare, government, and education, ensuring seamless customer
            service.
          </p>
        </div>
        <div className="lg:ml-52 my-10 relative flex items-center justify-center">
          <Image
            src={"/images/qmsDevice.png"}
            alt="QMS Device"
            width={400}
            height={160}
            className="w-96 h-full absolute drop-shadow-xl"
          />
          <Image
            src={"/icons/Rectangle 12.png"}
            alt="Rectangle"
            width={400}
            height={160}
            className="w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
