import React from "react";
import Card from "./Card";

const Features = () => {
  const features = [
    {
      title: "Reduced waiting times",
      description:
        "QMS streamlines customer flow, shortens wait times, and decreases congestion in lobbies and waiting areas even during peak times.",
      img: "/icons/time.png",
    },
    {
      title: "Improved staff productivity",
      description:
        "QMS empowers staff with the right information at the right time to delight customers, improving staff efficiency and productivity.",
      img: "/icons/improve.png",
    },
    {
      title: "Reduce customer uncertainty",
      description:
        "QMS manages customer expectations by keeping them informed and engaged via real-time updates through notifications and messages.",
      img: "/icons/reduce.png",
    },
    {
      title: "Improve customer experience",
      description:
        "QMS improves customer experience by displaying ticket and counter information on digital signage solutions installed in waiting areas",
      img: "/icons/experiance.png",
    },
  ];
  return (
    <section
      id="features"
      className="flex items-center justif-center flex-col mb-32"
    >
      <hr className="w-10 h-1 bg-black mb-2" />
      <h2 className="text-2xl lg:text-4xl font-bold mb-20">Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 container">
        {features.map((feature) => (
          <Card
            key={feature.title}
            title={feature.title}
            description={feature.description}
            img={feature.img}
          />
        ))}{" "}
      </div>
    </section>
  );
};

export default Features;
