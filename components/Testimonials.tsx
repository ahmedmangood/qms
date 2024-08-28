import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  const testimonialsArr = [
    {
      img: "/icons/avatar.png",
      name: "John Doe",
      title: "CEO, Test Company",
      description:
        "Overall, I highly recommend the Queuing Managment System which can organaize my customers",
    },
    {
      img: "/icons/avatar.png",
      name: "John Doe",
      title: "CEO, Test Company",
      description:
        "Overall, I highly recommend the Queuing Managment System which can organaize my customers",
    },
    {
      img: "/icons/avatar.png",
      name: "John Doe",
      title: "CEO, Test Company",
      description:
        "Overall, I highly recommend the Queuing Managment System which can organaize my customers",
    },
  ];
  return (
    <section>
      <div className="bg-[#4C7380] text-white px-3 py-10 w-full">
        <h2 className="text-2xl font-bold text-center my-20">
          What they saying?
        </h2>
        <div className="flex items-center justify-center">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {testimonialsArr.map((item) => (
                <CarouselItem key={item.name}>
                  <TestimonialCard
                    name={item.name}
                    img={item.img}
                    description={item.description}
                    title={item.title}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black rounded-md" />
            <CarouselNext className="text-black rounded-md" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
