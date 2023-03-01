import React from 'react'
import Link from 'next/link'

const Animated = () => {
    return (
        // <div className="animated-div">
        //     <div className="animated-div--header">
        //         <h1>aniamtieon</h1>
        //     </div>
        //     <div className="animated-div--body">
        //         <ul class="blobs">
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //         </ul>
        //     </div>
        // </div>
        <div>
            {/* <div class="context">
                <h1>Pure Css Animated Background</h1>
            </div> */}

            <div className="fixed top-0 z-50 area">
                <ul className="m-auto text-gray-300 circles">
                    <li className="pt-5 text-3xl text-center">A</li>
                    <li className="pt-2 text-center text-md">&</li>
                    <li className="pt-10 text-5xl text-center opacity-70">?</li>
                    <li className="text-4xl text-center pt-7 opacity-70">C</li>
                    <li className="pt-3 text-lg text-center">D</li>
                    <li className="pt-8 text-4xl text-center">E</li>
                    <li className="pt-3 text-lg text-center">F</li>
                    <li
                        className="pt-8 text-lg text-center text-gray-300 duration-300 ease-in-out border-2 border-transparent hover:text-xl hover:border-2 hover:border-blue-500 hover:cursor-pointer"
                        id="key">
                        <Link href="/projects" className="p-4">
                            Projects
                        </Link>
                    </li>
                    <li
                        className="text-2xl text-center duration-300 border-2 border-transparent pt-11 opacity-80 hover:text-3xl hover:border-2 hover:border-blue-500 hover:cursor-pointer"
                        id="key">
                        <Link href="/skills" className="p-8">
                            Skills
                        </Link>
                    </li>
                    <li
                        className="pt-12 text-2xl text-center duration-300 border-2 border-transparent opacity-80 hover:text-3xl hover:border-2 hover:border-blue-500 hover:cursor-pointer"
                        id="key">
                        <Link href="/about" className="p-8">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Animated
