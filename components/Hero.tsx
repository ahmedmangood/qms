import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center my-32">
      <div className="flex items-center justify-center flex-col text-center container my-10">
        <h1 className="text-4xl font-bold text-[#404040]">
          Make your business proccess easy
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Minimize wait times and maximize customer flow to scale operations and
          rev up revenues with Wavetec’s Enterprise Queue Management Solutions.
        </p>
      </div>
      <div>
        <Button asChild variant={"outline"} className="w-32 shadow-xl">
          <Link href={"#"}>Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
