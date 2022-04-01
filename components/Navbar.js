import React, { useState } from "react";
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div >
        <nav className="shadow-sm fixed w-full z-10 flex font-pacifico bg-transparent">

            <div className="w-full">
                <div className="flex items-center h-20  w-full">
                    <div className="flex items-center mx-20 justify-between w-full h-full">
                    <div className="h-full text-center bg-red-600 ">
                    <h1 className="font-bold text-2xl px-4 py-6 cursor-pointer font-serif w-48  text-white">
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
                                        className="cursor-pointer font-serif font-semibold bg-red-500 px-4 py-2 text-white rounded-md w-28 text-center hover:bg-white hover:text-red-500 transition duration-300 ease-in-out"
                                    >
                                        CONTACT
                                    </Link>

                                </div>
                            </div>
                    </div>

                    {/* Mobile Responsive */}
                    <div className="mr-10 flex md:hidden">
                        <button
                             onClick={() => setIsOpen(!isOpen)}
                             type="button"
                             className="bg-red-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-500 focus: outline-none focus: ring-offset-2 focus: ring-offset-red-500 focus: ring-white"
                             aria-controls="mobile-menu"
                             aria-expanded="false"
                        >
                            <span className="sr-only">Open Main Menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            ):(
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http:www.w3.org/2000/svg
                                    "fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition duration-100 ease-out transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
            >

            </Transition>
        </nav>
    </div>
  )
}

export default Navbar