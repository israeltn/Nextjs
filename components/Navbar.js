import React from 'react';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";

function Navbar() {
  return (
    <div>
        <nav className="shadow-sm fixed w-full z-10 flex font-pacifico">
            <div className="w-full">
                <div className="flex items-center h-20  w-full">
                    <div className="flex items-center mx-20 justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0">
                            <h1 className="font-bold text-xl cursor-pointer font-serif bg-red-800 h-20 text-center text-white">
                                THE FARM
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link 
                                    activeClass="Home"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer text-red-800 font-serif font-semibold px-3 py-2 text- hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
                                >
                                    Home
                                </Link>
                                <Link 
                                    activeClass="About"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer text-red-800 font-serif font-semibold px-3 py-2 text- hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
                                >
                                    About
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar