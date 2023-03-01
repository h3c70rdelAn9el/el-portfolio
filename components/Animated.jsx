import React from 'react'
import Link from 'next/link'

const Animated = () => {
    return (
        <div>
            <div className="fixed top-0 z-50 h-screen area">
                <ul className="m-auto text-gray-300 circles">
                    <li className="pt-5 text-3xl text-center">A</li>
                    <li className="pt-2 text-center text-md">&</li>
                    <li className="pt-10 text-5xl text-center opacity-70">?</li>
                    <li className="text-4xl text-center pt-7 opacity-70">C</li>
                    <li className="pt-3 text-lg text-center opacity-70">D</li>
                    <li className="pt-8 text-4xl text-center opacity-70">E</li>
                    <li className="pt-3 text-lg text-center opacity-70">F</li>
                    <li
                        className="pt-8 pr-8 overflow-hidden text-lg text-center duration-300 border-2 border-transparent hover:text-blue-400 opacity-80 hover:border-2 hover:border-blue-500 hover:cursor-pointer"
                        id="key">
                        <Link href="/projects" className="p-8 -ml-4">
                            Projects
                        </Link>
                    </li>
                    <li
                        className="overflow-hidden text-2xl text-center duration-300 border-2 border-transparent hover:text-blue-400 pt-11 opacity-80 hover:border-2 hover:border-blue-500 hover:cursor-pointer"
                        id="key">
                        <Link href="/skills" className="p-8">
                            Skills
                        </Link>
                    </li>
                    <li
                        className="hidden pt-12 text-2xl text-center duration-300 border-2 border-transparent hover:text-blue-400 opacity-80 hover:border-2 hover:border-blue-500 hover:cursor-pointer md:block"
                        id="key">
                        <Link href="/about" className="p-8">
                            About
                        </Link>
                    </li>
                    <li className="pt-8 text-5xl text-center opacity-70">Z</li>
                    {/* <li
                        className="pt-12 text-2xl text-center duration-300 border-2 border-transparent hover:text-blue-400 opacity-80 hover:border-2 hover:border-blue-500 hover:cursor-pointer my-about"
                        id="key">
                        <Link href="/about" className="p-8">
                            About
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Animated
