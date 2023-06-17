import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import OldTestament from "../components/OldTestament";
import NewTestament from "../components/NewTestament";




import { Tab } from "@headlessui/react";




//META TAGS


const _index = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Navbar />

      <section className="hero is-primary is-bold pt-20 bg-gray-100 min-h-screen">
        <div className="w-full  container  mx-auto ">
          <Tab.Group>
            <Tab.List className="flex bg-tertiary gap-1  shadow-md shadow-blue-300/50 p-2 m-2 rounded-full font-bold text-xl">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-3 rounded-full font-bold ",
                    "focus:outline-none ",
                    selected
                      ? "bg-white text-black  "
                      : " hover:bg-accent text-black hover:text-white"
                  )
                }
              >
                OLD TESTAMENT
              </Tab>

              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full  py-3  font-bold ",
                    "focus:outline-none ",
                    selected
                    ? "bg-white text-black  "
                    : " hover:bg-accent text-black hover:text-white"
                  )
                }
              >
                <div className="relative inline-block">NEW TESTAMENT</div>
              </Tab>
            </Tab.List>
            <Tab.Panels className="">
              <Tab.Panel className="h-full">
                <OldTestament />
              </Tab.Panel>

              <Tab.Panel className="h-full">
                <NewTestament />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default _index;
