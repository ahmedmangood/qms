import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#4C7380] text-white">
        <div className=" container flex flex-col lg:flex-row lg:items-center justify-around py-20">
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-bold text-xl mb-4">QMS</h3>
            <p className="py-1">Address, city</p>
            <p className="py-1">+96651234567</p>
            <p className="py-1">info@qms.com</p>
          </div>
          <div className="mt-14 ">
            <h3 className="font-bold text-lg mb-5">social media:</h3>
            <div className="flex items-start justify-center gap-5">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <p className="text-center py-4">Copyright@2024</p>
      </footer>
    </>
  );
};

export default Footer;
