// import React from 'react'

// const Navbar = () => {
//     return <div>Nav</div>
// }

// export default Navbar
import Image from 'next/image'
import Link from 'next/link'
// import { Link } from 'react-scroll'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

// export default function Navbar() {
//   const [stickyClass, setStickyClass] = useState('relative');

//   useEffect(() => {
//     window.addEventListener('scroll', stickNavbar);

//     return () => {
//       window.removeEventListener('scroll', stickNavbar);
//     };
//   }, []);

//   const stickNavbar = () => {
//     if (window !== undefined) {
//       let windowHeight = window.scrollY;
//       windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
//     }
//   };

//   return <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>Navbar</div>;
// }

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const handleSetActive = (to) => {
        // apply active class to the current link
        console.log(to)
    }

    return (
        <div className="relative">
            <div className="fixed w-full h-20 z-[99999] bg-primary shadow-xl">
                <div className="flex items-center justify-between w-full h-full px-2">
                    <div className="w-24 ml-4">
                        <Link href="/" className="cursor-pointer">
                            <Image
                                src="/assets/images/hdalogo.png"
                                width="125"
                                height="125"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="relative w-full">
                        <ul className="flex-row justify-end hidden w-full gap-8 pr-8 uppercase md:flex">
                            {/* <Link
                                activeClass="active"
                                to="skil"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                                className="cursor-pointer"
                                onSetActive={handleSetActive}>
                                Skills
                            </Link> */}
                            <Link
                                activeClass="active"
                                href="/skills"
                                className="cursor-pointer">
                                Skills
                            </Link>
                            <Link
                                activeClass="active"
                                href="/about"
                                className="cursor-pointer"
                                onSetActive={handleSetActive}>
                                About
                            </Link>
                            <Link
                                activeClass="active"
                                href="/projects"
                                className="cursor-pointer"
                                onSetActive={handleSetActive}>
                                Projects
                            </Link>
                        </ul>
                        <div
                            onClick={handleNav}
                            className="md:hidden absolute  -top-1.5 right-4"
                            size={25}>
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>

                {/* <div className="fixed top-0 left-0 w-full h-screen bg-gray-600 opacity-80"> */}
                <div
                    className={
                        nav
                            ? 'md:hidden fixed left-0 top-0 h-32 bg-gray-600 opacity-90 w-full duration-100 ease-in-out'
                            : ''
                    }>
                    <div
                        className={
                            nav
                                ? ' fixed left-0 top-0 w-[100%] sm:w-[70%] h-32 bg-gray-700 p-10 ease-in-out duration-300  z-[99999]'
                                : // : 'fixed left-[-100%] top-0 w-[85%] sm:w-[70%] h-screen bg-gray-700 p-10 ease-in duration-300  z-[99999]'
                                  'fixed top-[-100%]  w-[100%] sm:w-[70%] h-32 bg-gray-700 p-10 ease-in-out duration-400  z-[99999]'
                        }>
                        <div className="relative flex flex-row-reverse justify-between w-full">
                            <div className="p-2 text-black rounded-full hover:cursor-pointer">
                                <div
                                    className="p-2 text-black bg-gray-400 rounded-full hover:cursor-pointer"
                                    onClick={handleNav}>
                                    <AiOutlineClose />
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-row justify-center w-full">
                            <div className="flex flex-row justify-center w-full text-sm text-white uppercase">
                                <div>
                                    <ul className="flex flex-row gap-12 pt-1 mx-auto text-center">
                                        <Link
                                            onClick={handleNav}
                                            activeClass="active"
                                            href="skills"
                                            className="cursor-pointer hover:text-black"
                                            onSetActive={handleSetActive}>
                                            Skills
                                        </Link>
                                        <Link
                                            activeClass="active"
                                            onClick={handleNav}
                                            href="about"
                                            className="cursor-pointer hover:text-black"
                                            onSetActive={handleSetActive}>
                                            About
                                        </Link>
                                        <Link
                                            activeClass="active"
                                            onClick={handleNav}
                                            href="projects"
                                            className="cursor-pointer hover:text-black"
                                            onSetActive={handleSetActive}>
                                            Projects
                                        </Link>
                                    </ul>
                                </div>
                                {/* <div
                                            className="p-2 text-black bg-gray-400 rounded-full hover:cursor-pointer"
                                            onClick={handleNav}>
                                            <AiOutlineClose />
                                        </div> */}
                            </div>
                            {/* <div
                                className="p-2 text-black bg-gray-400 rounded-full ml-96 hover:cursor-pointer"
                                onClick={handleNav}>
                                <AiOutlineClose />
                            </div> */}
                        </div>
                        {/* <div class="relative h-6 w-full justify-between border border-red-500">
                            <div class=""></div>
                            <div class=" right-0 border border-black h-4">
                                <AiOutlineClose />
                            </div>
                        </div> */}
                        {/* <div className="">
                                    <div className="flex flex-col text-white uppercase">
                                        <ul className="block mx-auto mt-48 text-center">
                                            <Link
                                                href="/about"
                                                className="w-10">
                                                <li className="mb-10 text-white hover:text-black">
                                                    About
                                                </li>
                                            </Link>
                                            <Link href="/projects" className="">
                                                <li className="text-white hover:text-black">
                                                    Projects
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="flex flex-row justify-center w-full gap-3 mx-auto text-gray-200 uppercase">
                                    <Link
                                        activeClass="active"
                                        onClick={handleNav}
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={500}
                                        className="cursor-pointer"
                                        onSetActive={handleSetActive}>
                                        Skills
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        onClick={handleNav}
                                        to="bio"
                                        spy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={500}
                                        className="cursor-pointer"
                                        onSetActive={handleSetActive}>
                                        About
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        onClick={handleNav}
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={500}
                                        className="cursor-pointer"
                                        onSetActive={handleSetActive}>
                                        Projects
                                    </Link>
                                </ul> */}
                        {/* TODO:   ADD SOCIAL LINKS */}
                    </div>
                </div>
            </div>
        </div>
        // </div>
        // </div >
    )
}

export default Navbar
