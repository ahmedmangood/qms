import Image from "next/image";

type FeatcherType = {
  title: string;
  description: string;
  img: string;
};

const Card = ({ title, description, img }: FeatcherType) => {
  return (
    <div className="flex items-center justify-center w-full p-8 rounded-xl shadow-md bg-white lg:flex-col lg:gap-3 hover:shadow-xl transition-all">
      <Image
        src={img}
        alt={title}
        width={52}
        height={52}
        className="w-16 h-16 mr-4 lg:mb-3"
      />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
