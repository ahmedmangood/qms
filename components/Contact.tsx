import { MailIcon, MessageCircle, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="container my-32">
      <h4 className="text-2xl lg:text-4xl font-semibold uppercase">
        Feel free to contact us in case of any queries
      </h4>
      <hr className="h-1 w-[160px] bg-black mb-20" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
        <div className="w-full m-auto flex items-center justify-center">
          <Image
            src={"/images/question.png"}
            alt="question"
            width={400}
            height={400}
            className="w-[500px]"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <form className="flex items-center justify-center flex-col border border-gray-200 drop-shadow-md rounded-md gap-5 p-5 lg:w-[600px]">
            <div className="bg-[#6c62fe] p-5 flex gap-3 rounded-sm text-white w-full">
              <User />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
                required
                className="bg-[#6c62fe] placeholder:text-white focus:outline-none"
              />
            </div>
            <div className="bg-[#6c62fe] p-5 flex gap-3 rounded-sm text-white w-full">
              <MailIcon />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="bg-[#6c62fe] placeholder:text-white focus:outline-none"
              />
            </div>
            <div className="bg-[#6c62fe] p-5 flex flex-col w-full gap-3 rounded-sm text-white">
              <MessageCircle />
              <textarea
                className="bg-[#6c62fe] focus:outline-none placeholder:text-white h-[200px]"
                name="message"
                placeholder="your message"
              ></textarea>
            </div>
            <div className="w-full flex items-center justify-center">
              <Button
                variant={"default"}
                type="submit"
                className="w-full bg-[#6c62fe] hover:bg-[#756de7] transition-all"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
