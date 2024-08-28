import Image from "next/image";
import React from "react";

type TestimonialsType = {
  name: string;
  title: string;
  img: string;
  description: string;
};

const TestimonialCard = ({
  name,
  title,
  img,
  description,
}: TestimonialsType) => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 bg-[#EFF4F6] px-5 h-80 py-10 rounded-lg w-[250px] m-auto">
      <div>
        <Image
          src={img}
          alt={name}
          width={60}
          height={60}
          className="object-cover rounded-full w-16 h-16 border border-gray-200 p-1 mb-2"
        />
        <div className="flex flex-col gap-2 items-start justify-center ml-4">
          <h4 className="text-sm font-semibold text-black">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
          <div className="flex items-center justify-center">
            <Image
              src="/icons/fullStar.png"
              alt="full star"
              width={20}
              height={20}
            />
            <Image
              src="/icons/fullStar.png"
              alt="full star"
              width={20}
              height={20}
            />
            <Image
              src="/icons/fullStar.png"
              alt="full star"
              width={20}
              height={20}
            />
            <Image
              src="/icons/fullStar.png"
              alt="full star"
              width={20}
              height={20}
            />
            <Image src="/icons/star.png" alt="star" width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center ml-4">
        <p className="text-sm text-black text-start">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
