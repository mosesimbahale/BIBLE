import React from "react";

import Navbar from "../../components/Navbar";

import { Link } from "react-router-dom";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-16 mt-16">
        <div className="flex flex-col lg:flex-row justify-start items-left container m-auto">
          <div className="flex flex-col w-full lg:w-2/3 p-4 gap-4 m-auto ">
            <p className="text-4xl text-bold text-left">
              <span className="text-amber-900">WELCOME</span> TO CHRISTIAN
              FELLOWSHIP.
            </p>
            <p className="text-left">
              A place where you can find your spiritual home, where you can find
              your spiritual family. Grow in your faith. Grow in your
              relationship with God. A place to learn more about the Bible. A
              place to learn more about God.
            </p>

            <Link
              to="/lounge"
              className="px-6 py-2 my-6 mx-auto bg-stone-800 text-white"
            >
              GO TO THE LOUNGE{" "}
              <FiArrowUpRight className="inline text-white ml-2" size="25px" />
            </Link>

            <p className="text-left font-bold"> Follow Us</p>
            <div className="flex flex-row justify-start items-left gap-4">
              <BsFacebook className="text-amber-900" size="30px" />
              <AiFillInstagram className="text-amber-900" size="30px" />
              <AiFillTwitterCircle className="text-amber-900" size="30px" />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <img
              src="https://res.cloudinary.com/di3ucl5oh/image/upload/v1667724902/AdobeStock_361257750_bxvgun.jpg"
              alt="church"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2 "OUR MISSION" */}
      <div className="bg-stone-800  ">
        <p className="text-white  text-center p-10">
          Cupcake pudding marzipan toffee tiramisu candy. Jelly wafer chupa
          chups topping lemon drops candy canes croissant pastry. Chocolate
          jelly candy cotton candy tootsie roll. Powder dragée ice cream oat
          cake dessert cake jujubes tootsie roll biscuit. Shortbread marzipan
          cotton candy dessert gummies lollipop cotton candy candy caramels.
          Cotton candy tiramisu muffin carrot cake gingerbread lollipop oat cake
          tiramisu. Ice cream gummi bears halvah jelly beans jelly-o wafer cake
          icing candy. Pudding brownie jujubes topping caramels dessert tootsie
          roll cake. Dessert apple pie fruitcake jujubes gummi bears. Croissant
          gummies gingerbread ice cream chupa chups chocolate cupcake jelly.
          Bonbon shortbread cheesecake cotton candy bear claw oat cake. Lemon
          drops pastry carrot cake gingerbread cupcake croissant croissant tart.
          Wafer chocolate cake sweet tiramisu cotton candy.
        </p>
      </div>

      {/* SECTION 3 "OUR VISION" */}
      <div className="bg-white  ">
        <p className=" text-center p-10">
          Cupcake pudding marzipan toffee tiramisu candy. Jelly wafer chupa
          chups topping lemon drops candy canes croissant pastry. Chocolate
          jelly candy cotton candy tootsie roll. Powder dragée ice cream oat
          cake dessert cake jujubes tootsie roll biscuit. Shortbread marzipan
          cotton candy dessert gummies lollipop cotton candy candy caramels.
          Cotton candy tiramisu
        </p>
      </div>
    </>
  );
};

export default Home;
