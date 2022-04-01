import React from 'react';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";

function Navbar() {
  return (
    <div >
        <nav className="shadow-sm fixed w-full z-10 flex font-pacifico bg-transparent">
            <div className="w-full">
                <div className="flex items-center h-20  w-full">
                    <div className="flex items-center mx-20 justify-between w-full h-full">
                    <div className="h-full text-center bg-red-600 ">
                    <h1 className="font-bold text-3xl cursor-pointer font-serif py- mx- w-48  text-white">
                                THE FARM
                            </h1>
                    </div>
                        <div className="flex justify-center items-center flex-shrink-0 h-full">
                            
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link 
                                    activeClass="Home"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer text-red-800 font-serif font-semibold px-3 py-2 hover:bg-red-700 hover:text-white rounded-md transition duration-300 ease-in-out"
                                >
                                    HOME
                                </Link>
                                <Link 
                                    activeClass="ABOUT"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer text-red-500 font-serif font-semibold px-3 py-2 hover:bg-red-500 hover:text-white rounded-md transition duration-300 ease-in-out"
                                >
                                    ABOUT
                                </Link>
                                <Link 
                                    activeClass="products"
                                    to="products"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer text-red-500 font-serif font-semibold px-3 py-2 hover:bg-red-500 hover:text-white rounded-md transition duration-300 ease-in-out"
                                >
                                    PRODUCTS
                                </Link>
                                <Link 
                                    activeClass="contact"
                                    to="contact"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer font-serif font-semibold bg-red-500 text-white rounded-md w-28 text-center h-9"
                                >
                                    CONTACT
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