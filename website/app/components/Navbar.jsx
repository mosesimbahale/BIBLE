import React, { Fragment } from "react";

import { Link, NavLink } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

import { AiOutlinePoweroff } from "react-icons/ai";

import { Popover, Transition } from "@headlessui/react";

import { HiHome } from "react-icons/hi";

import { BsChevronDoubleDown } from "react-icons/bs";

import { RxCross2 } from "react-icons/rx";

import {HiOutlineHome} from "react-icons/hi"

const solutions = [
  {
    name: "About",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/about",
    icon: HiHome,
  },
  {
    name: "Pricing",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/pricing",
    icon: HiHome,
  },
  {
    name: "Blog",
    description: "Your customers' data will be safe and secure.",
    href: "/blog",
    icon: HiHome,
  },
  {
    name: "FAQs",
    description: "Connect with third-party tools that you're already using.",
    href: "/faqs",
    icon: HiHome,
  },
];

const resources = [
  {
    name: "Help Center",
    description: "Get Any Hepl Here",
    href: "/contact",
    icon: HiHome,
  },
  {
    name: "Features",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/features",
    icon: HiHome,
  },
  {
    name: "Legal",
    description: "Get all of T and Cs here",
    href: "/legal",
    icon: HiHome,
  },
];

const user = { name: "Tom Cook", email: "" };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const activeClassName =
    " border-b-2 border-black  bg-clip-text bg-gradient-to-br from-lime-500 to-lime-900 text-transparent";

  return (
    <>
      <Popover className=" backdrop-blur-3xl bg-white  shadow-md shadow-blue-100/50  fixed top-0 left-0 right-0 z-50 ">
        <div className=" px-6 sm:px-4">
          <div className="flex justify-between items-center border-gray-300 py-3 md:justify-start md:space-x-10 ">
            <div className="flex justify-start  lg:flex-1">
              <Link to="/">
                <div className="flex flex-row justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dlw9hjlzv/image/upload/v1685306254/BIBLE/cross_qbjzmn.png"
                    alt="logo"
                    className="  h-8 w-auto "
                  />
                  <div className="flex flex-inline items-center">
                    <h1 className=" text-3xl font-black  pl-4 text-slate-500">
                      Christianity.
                    </h1>
                  </div>
                </div>
              </Link>
            </div>

            <div className=" lg:hidden">
              <Popover.Button className="bg-slate-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-400">
                <span className="sr-only">Open menu</span>

                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 10L7 10"
                    stroke="#365314"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    opacity="0.7"
                    d="M18 15L7 15"
                    stroke="#365314"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    opacity="0.4"
                    d="M12 20H7"
                    stroke="#365314"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </Popover.Button>
            </div>

            <Popover.Group
              as="nav"
              className="hidden lg:flex space-x-6 text-sm font-sans items-center"
            >
              <Link
                to="/"
                className=" font-medium text-gray-900 hover:text-amber-900 p-1 "
              >
                <HiOutlineHome className="text-gray-900 " size="25px" />
              </Link>

              <NavLink
                to="/bible"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : " font-medium text-gray-900 hover:text-gray-500 p-1 "
                }
              >
                The Holy Bible
              </NavLink>

              <NavLink
                to="/Hymn Book"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : " font-medium text-gray-900 hover:text-gray-500 p-1 "
                }
              >
                Hymn Books
              </NavLink>

              <NavLink
                to="/Sticky Notes"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : " font-medium text-gray-900 hover:text-gray-500 p-1 "
                }
              >
                Sticky Notes
              </NavLink>

              <NavLink
                to="/Hymn Book"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : " font-medium text-gray-900 hover:text-gray-500 p-1 "
                }
              >
                Charity Works
              </NavLink>



              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-slate-200 p-1 rounded-sm inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                      )}
                    >
                      <span className="text-sm p-1">Support</span>
                      <BsChevronDoubleDown
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-lime-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 -mr-6">
              {user?.email ? (
                <div className="flex flex-row">
                  <div className="">
                    {user?.photoURL ? (
                      <Link to="/account">
                        <img
                          className="w-10 h-10 rounded-full  "
                          src={user.photoURL}
                          alt="user.email"
                        />
                      </Link>
                    ) : (
                      <Link to="/account">
                        <FaUserCircle className="bg-white h-10 w-10 text-lime-400" />
                      </Link>
                    )}
                  </div>

                  <div className="flex items-center ml-4">
                    <button className="text-orange-500 hover:text-red-700">
                      <AiOutlinePoweroff className="w-6 h-6 ml-2" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="  ml-4 whitespace-nowrap inline-flex items-center justify-center px-6 py-2  shadow-sm font-medium  bg-tertiary rounded-full text-black  hover:bg-slate-600  "
                  >
                    Sign In
                  </Link>

                  <Link
                    to="/freesignup"
                    className="  ml-4 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 rounded-full shadow-sm font-medium  bg-accent  "
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            {/* 

 
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-sm inline-flex items-center justify-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400"
                    )}
                  >
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M5.5 9.5C5.5 7.29086 7.29086 5.5 9.5 5.5C11.7091 5.5 13.5 7.29086 13.5 9.5C13.5 11.7091 11.7091 13.5 9.5 13.5C7.29086 13.5 5.5 11.7091 5.5 9.5Z"
                          stroke="#365314"
                          stroke-width="1.5"
                        />
                        <path
                          opacity="0.5"
                          d="M16.5 20.5C16.5 18.2909 18.2909 16.5 20.5 16.5C22.7091 16.5 24.5 18.2909 24.5 20.5C24.5 22.7091 22.7091 24.5 20.5 24.5C18.2909 24.5 16.5 22.7091 16.5 20.5Z"
                          stroke="#365314"
                          stroke-width="1.5"
                        />
                        <path
                          d="M24.5 9.5C24.5 7.29086 22.7091 5.5 20.5 5.5C18.2909 5.5 16.5 7.29086 16.5 9.5C16.5 11.7091 18.2909 13.5 20.5 13.5C22.7091 13.5 24.5 11.7091 24.5 9.5Z"
                          stroke="#365314"
                          stroke-width="1.5"
                        />
                        <path
                          d="M13.5 20.5C13.5 18.2909 11.7091 16.5 9.5 16.5C7.29086 16.5 5.5 18.2909 5.5 20.5C5.5 22.7091 7.29086 24.5 9.5 24.5C11.7091 24.5 13.5 22.7091 13.5 20.5Z"
                          stroke="#365314"
                          stroke-width="1.5"
                        />
                      </svg>
                    </span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 right-0 transform translate-x-4 xs:translate-x-6  mt-3 px-2 w-screen max-w-xs sm:max-w-screen sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-3 bg-white px-8 py-6 xs:p-2">
                          <div class="grid grid-cols-3 gap-4 align-middle">
                            <span>
                              <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_406_2045)">
                                  <path
                                    d="M21.9999 10C21.9551 11.9004 21.4823 13.7663 20.6167 15.4587C19.751 17.1512 18.5147 18.6265 16.9999 19.775V23C16.9999 23.2652 16.8945 23.5196 16.707 23.7071C16.5194 23.8946 16.2651 24 15.9999 24C15.7347 24 15.4803 23.8946 15.2928 23.7071C15.1052 23.5196 14.9999 23.2652 14.9999 23V2C14.9909 1.62426 15.0936 1.25431 15.2949 0.936929C15.4962 0.619551 15.7871 0.369011 16.1309 0.217C16.5257 0.0563652 16.9588 0.0142302 17.3772 0.0957442C17.7956 0.177258 18.1812 0.378891 18.4869 0.676C20.8062 3.22095 22.0633 6.5573 21.9999 10ZM10.9999 0C10.7347 0 10.4803 0.105357 10.2928 0.292893C10.1052 0.48043 9.99988 0.734784 9.99988 1V7C9.99731 7.61826 9.80379 8.22063 9.44579 8.7247C9.08779 9.22877 8.58279 9.60992 7.99988 9.816V1C7.99988 0.734784 7.89452 0.48043 7.70698 0.292893C7.51945 0.105357 7.26509 0 6.99988 0C6.73466 0 6.48031 0.105357 6.29277 0.292893C6.10524 0.48043 5.99988 0.734784 5.99988 1V9.816C5.41697 9.60992 4.91197 9.22877 4.55397 8.7247C4.19596 8.22063 4.00244 7.61826 3.99988 7V1C3.99988 0.734784 3.89452 0.48043 3.70698 0.292893C3.51945 0.105357 3.26509 0 2.99988 0C2.73466 0 2.48031 0.105357 2.29277 0.292893C2.10523 0.48043 1.99988 0.734784 1.99988 1V7C2.00133 8.1522 2.39997 9.26868 3.1286 10.1613C3.85722 11.0538 4.87129 11.6679 5.99988 11.9V23C5.99988 23.2652 6.10524 23.5196 6.29277 23.7071C6.48031 23.8946 6.73466 24 6.99988 24C7.26509 24 7.51945 23.8946 7.70698 23.7071C7.89452 23.5196 7.99988 23.2652 7.99988 23V11.9C9.12847 11.6679 10.1425 11.0538 10.8712 10.1613C11.5998 9.26868 11.9984 8.1522 11.9999 7V1C11.9999 0.734784 11.8945 0.48043 11.707 0.292893C11.5194 0.105357 11.2651 0 10.9999 0V0Z"
                                    fill="#374957"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_406_2045">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              Recipes
                            </span>

                            <span>
                              {" "}
                              <Link
                                to="/calendar"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                              >
                                <BsFillCalendarRangeFill className="h-6 w-6 text-gray-700 " />
                                calendar
                              </Link>
                            </span>
                            <span>
                              {" "}
                              <Link
                                to="/todo"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                              >
                                <FaClipboardList className="h-6 w-6 text-gray-700 " />
                                lists
                              </Link>
                            </span>
                            <span>
                              {" "}
                              <Link
                                to="/focus"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                              >
                                <BsFillStopwatchFill className="h-6 w-6 text-gray-700 " />
                                Focus
                              </Link>
                            </span>

                            <span>
                              {" "}
                              <Link
                                to="/notes"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                              >
                                <BsFillStickiesFill className="h-6 w-6 text-gray-700 " />
                                Notes
                              </Link>
                            </span>

                            <span>
                              {" "}
                              <Link
                                to="/timetable"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                              >
                                <BsTable className="h-6 w-6 text-gray-700 " />
                                TTables
                              </Link>
                            </span>

                            <span>
                              {" "}
                              <Link
                                to="/project"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                              >
                                <GoProject className="h-6 w-6 text-gray-700 " />
                                Projects
                              </Link>
                            </span>

                            <span>
                              <Link
                                to="/diary"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                              >
                                <BsJournalBookmarkFill className="h-6 w-6 text-gray-700 " />
                                Diary
                              </Link>
                            </span>
                            <span>
                              {" "}
                              <Link
                                to="/reminder"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                              >
                                <BsFillAlarmFill className="h-6 w-6 text-gray-700 " />
                                Reminders
                              </Link>
                            </span>

                            <span>
                              <Link
                                to="/routine"
                                className=" text-center font-medium text-gray-900 hover:text-gray-900"
                              >
                                <GrBlockQuote className="h-6 w-6 text-gray-700 " />
                                Motivation
                              </Link>
                            </span>

                            <span>
                              <Link
                                to="/routine"
                                className=" text-center font-medium text-gray-900 hover:text-gray-900"
                              >
                                <SiYourtraveldottv className="h-6 w-6 text-gray-700 " />
                                Vacation
                              </Link>
                            </span>

                            <span>
                              <Link
                                to="/routine"
                                className=" text-center font-medium text-gray-900 hover:text-gray-900"
                              >
                                <SiReactrouter className="h-6 w-6 text-gray-700 " />
                                Routines
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>


            */}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p>Sassy P.A.</p>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <RxCross2 className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-lime-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    to="/Legal"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Legal
                  </Link>

                  <Link
                    to="/features"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Guides
                  </Link>

                  <Link
                    to="/contact"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Help Center
                  </Link>
                </div>

                <div>
                  <Link
                    to="/freesignup"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-slate-400 hover:bg-slate-700"
                  >
                    Sign up
                  </Link>

                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <Link
                      to="/signin"
                      className="text-slate-500 hover:text-lime-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {/*THE COOKIE CONSENT

<div class="fixed bottom-0 right-0 z-50 p-4">
  <div class="relative flex flex-wrap items-end pl-12 pr-8 py-6 bg-orange-300">
    <div class="absolute top-0 -mt-2 w-6 h-6 bg-orange-300 transform rotate-45"></div>
    <div class="max-w-md pr-2">
      <h5 class="mb-2 text-xl font-bold font-heading">Cookies settings</h5>
      <p class="text-gray-500">By clicking Accept, you agree to the storing of cookies on your device to enhance site navigation...</p>
    </div>
    <div class="mt-6 md:mt-0">
      <a class="inline-flex mr-6 items-center text-blue-500 underline" href="#">
        <span class="mr-2">More</span>
        <svg width="27" height="15" viewbox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.0871 7.41489L19.3999 14.102L18.564 13.2661L24.2439 7.58625L0.592385 7.59043L0.592385 6.41183L24.2439 6.40765L18.982 1.14571L19.8179 0.309822L26.0871 6.579C26.3179 6.80984 26.3179 7.18406 26.0871 7.41489Z" fill="#3C60D9"></path>
        </svg>
      </a>
      <a class="inline-block bg-orange-400 hover:bg-orange-600 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200" href="#">Accept</a>
    </div>
  </div>
</div>

                  */}
    </>
  );
}
