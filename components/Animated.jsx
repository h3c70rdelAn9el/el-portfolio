import React from 'react'

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
                    <a href="#">
                        <li>A</li>
                    </a>
                    <li className="pt-2 text-sm text-center">B</li>
                    <li className="pt-10 text-5xl text-center opacity-70">?</li>
                    <li className="pt-8 text-4xl text-center opacity-70">C</li>
                    <li className="pt-2 text-sm text-center">D</li>
                    <li className="pt-2 text-sm text-center">E</li>
                    <li className="pt-2 text-sm text-center">F</li>
                    <li
                        className="pt-8 text-center duration-300 hover:text-lg hover:border-2 hover:border-blue-500 hover:cursor-pointer"
                        id="key">
                        Projects
                    </li>
                    <li
                        className="pt-12 text-center duration-300 hover:text-lg hover:border-2 hover:border-blue-500 hover:cursor-pointer"
                        id="key">
                        Skills
                    </li>
                    <li
                        className="pt-16 text-center duration-300 hover:text-lg hover:border-2 hover:border-blue-500 hover:cursor-pointer"
                        id="key">
                        About
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Animated
