import React, { useState } from "react";
import {Transition} from "@headlessui/react";
import Link from "next/dist/client/link";



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div >
        <nav className="fixed z-10 flex w-full bg-transparent shadow-sm font-pacifico">

            <div className="w-full">
                <div className="flex items-center w-full h-20">
                    <div className="flex items-center justify-between w-full h-full mx-20">
                    <div className="h-full text-center bg-red-600 ">
                    <h1 className="w-48 px-4 py-6 font-serif text-xl font-bold text-white cursor-pointer">
                                THE FARM
                            </h1>
                    </div>
                        <div className="flex items-center justify-center flex-shrink-0 h-full">
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-baseline ml-10 space-x-4">

                                   <Link href=""
                                       activeClass="Home"
                                       to="about"
                                       smooth={true}
                                       offset={50}
                                       duration={500}
                                       className="px-3 py-2 font-serif font-semibold text-red-800 transition duration-300 ease-in-out rounded-md cursor-pointer hover:bg-red-700 hover:text-white"
                                   >
                                       HOME
                                   </Link>

                                     <Link href=""
                                        activeClass="ABOUT"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="px-3 py-2 font-serif font-semibold text-red-500 transition duration-300 ease-in-out rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
                                      >
                                        ABOUT
                                    </Link>

                                    <Link href=""
                                        activeClass="products"
                                        to="products"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="px-3 py-2 font-serif font-semibold text-red-500 transition duration-300 ease-in-out rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
                                    >
                                        PRODUCTS
                                    </Link>

                                    <Link href=""
                                        activeClass="contact"
                                        to="contact"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="px-4 py-2 font-serif font-semibold text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-md cursor-pointer w-28 hover:bg-white hover:text-red-500"
                                    >
                                        CONTACT
                                    </Link>

                                </div>
                            </div>
                    </div>

                    {/* Mobile Responsive */}
                    <div className="flex mr-10 md:hidden">
                        <button
                             onClick={() => setIsOpen(!isOpen)}
                             type="button"
                             className="inline-flex items-center justify-center p-2 text-white bg-red-500 rounded-md outline-none hover:bg-red-500 focus: ring-offset-2 ring-offset-red-500 ring-white"
                             aria-controls="mobile-menu"
                             aria-expanded="false"
                        >
                            <span className="sr-only">Open Main Menu</span>
                            {!isOpen ? (
                                <svg className="block w-6 h-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            ):(
                                <svg
                                    className="block w-6 h-6"
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