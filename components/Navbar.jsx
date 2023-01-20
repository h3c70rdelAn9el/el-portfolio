// import React from 'react'

// const Navbar = () => {
//     return <div>Nav</div>
// }

// export default Navbar
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="fixed w-full h-20  shadow-xl">
            <div className="flex justify-between items-center w-full h-full px-2">
                <div className="w-24">
                    <Link href="/">
                        <Image
                            src="/../public/assets/images/hdalogo.png"
                            width="125"
                            height="125"
                        />
                    </Link>
                </div>
                <div class="w-full relative">
                    <ul className="md:flex  justify-end uppercase pr-8 flex-row gap-8  w-full hidden">
                        <Link href="/about">
                            <li className="">About</li>
                        </Link>
                        <Link href="/projects">
                            <li className="">Projects</li>
                        </Link>
                    </ul>
                    <div
                        onClick={handleNav}
                        className="md:hidden absolute  -top-1.5 right-0"
                        size={25}
                    >
                        <AiOutlineMenu />
                    </div>
                </div>
            </div>

            {/* <div className="fixed left-0 top-0 h-screen bg-gray-600 opacity-80 w-full"> */}
            <div
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 h-screen bg-gray-600 opacity-80 w-full'
                        : ''
                }
            >
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[85%] sm:w-[70%] h-screen bg-gray-700 p-10 ease-in duration-500  z-[99999]'
                            : 'fixed left-[-100%] top-0 w-[85%] sm:w-[70%] h-screen bg-gray-700 p-10 ease-in duration-500  z-[99999]'
                    }
                >
                    <div class="flex relative w-full flex-row">
                        <div
                            className="ml-96 bg-gray-400 rounded-full text-black hover:cursor-pointer p-2"
                            onClick={handleNav}
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    {/* <div class="relative h-6 w-full justify-between border border-red-500">
                        <div class=""></div>
                        <div class=" right-0 border border-black h-4">
                            <AiOutlineClose />
                        </div>
                    </div> */}
                    <div class="">
                        <div className="flex flex-col text-white uppercase">
                            <ul className="block mx-auto text-center mt-48">
                                <Link href="/about" className="w-10">
                                    <li className="text-white hover:text-black mb-10">
                                        About
                                    </li>
                                </Link>
                                <Link href="/projects" className="w-10">
                                    <li className="text-white hover:text-black">
                                        Projects
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    {/* TODO:   ADD SOCIAL LINKS */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
