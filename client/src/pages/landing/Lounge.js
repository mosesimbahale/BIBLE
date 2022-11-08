import React from "react";

import Navbar from "../../components/Navbar";

const Lounge = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-white mt-16 ">
        <div class="w-full mx-auto text-center pt-10  pb-10    bg-[url('https://res.cloudinary.com/di3ucl5oh/image/upload/v1667724867/AdobeStock_391913745_f0kwla.jpg')] object-contain bg-bottom ">
          <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-amber-900 font-medium rounded-full shadow-sm">
            Our Blog
          </span>

          <h3 className="mb-1 text-2xl font-bold ">
            <span className="text-amber-800">Welcome to</span>
            <span className="text-white">The Lounge</span>
          </h3>

          <p class="text-base text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-left container m-auto">
          forums, and more.
        </div>
      </div>
    </>
  );
};

export default Lounge;
