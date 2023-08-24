import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <>
            <nav
                id='header'
                className='fixed w-full z-30 top-0 p-5 text-white bg-gradient-to-r from-[#080055] to-[#008ab9] border-b border-neutral-400'
            >
                <div className="w-full container mx-auto flex flex-wrap items-center justify-center sm:justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                        <a href="/" className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl font-thunderLight">
                            José Pablo Arancibia Linker
                        </a>
                    </div>
                    <div className="block lg:hidden pr-4 ml-5">
                        <button
                            className="flex items-center p-1 text-white hover:text-teal-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                            onClick={() => {
                                setShowMobileMenu(!showMobileMenu)
                            }}
                        >
                            <svg
                                className="fill-current h-6 w-6"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>

                    <div className="w-full flex-grow lg:flex lg:items-center hidden lg:w-auto mt-2 lg:mt-0 lg:bg-transparent text-white p-4 lg:p-0 z-20">
                        <ul className="list-reset flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <a href="/#sobremi" className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                                    Sobre Mí
                                </a>
                            </li>
                            <li className="mr-3">
                                <a href="/#competencias" className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                                    Competencias
                                </a>
                            </li>
                            <li className="mr-3">

                                <a href="/#proyectos" className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                                    Proyectos/Desarrollos
                                </a>
                            </li>
                            <li className="mr-3">
                                <a href="/#trabajos" className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                                    Trabajo/Clientes
                                </a>
                            </li>
                        </ul>
                    </div>
                    {
                        showMobileMenu && (
                            <div className="w-full flex-grow lg:hidden items-center flex lg:w-auto lg:mt-2 mt-0 bg-transparent text-white lg:p-4 p-0 z-20">
                                <ul className="list-reset flex flex-col lg:flex justify-end flex-1 items-center">
                                    <li className="mr-3">
                                        <a href="#sobremi" className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                                            Sobre Mí
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#competencias" className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                                            Competencias
                                        </a>
                                    </li>
                                    <li className="mr-3">

                                        <a href="#proyectos" className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                                            Proyectos/Desarrollos
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#trabajos" className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                                            Trabajo/Clientes
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar