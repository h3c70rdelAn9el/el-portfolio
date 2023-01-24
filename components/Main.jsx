import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
// import keyboard from '../public/assets/images/keyboard.jpeg'

import Background from '../public/assets/images/keyboard.jpeg'

export const Main = () => {
    return (
        <div className="bg-black" id="home">
            <div className="relative z-10 bg-cover h-[750px] bg-keyboard opacity-40"></div>
            <div className="absolute top-0 z-20 flex flex-col items-center justify-center w-full pb-4 mx-auto text-blue-200 pt-80">
                <h1 className="text-5xl font-bold md:text-6xl">Hey there!</h1>
                <h1 className="text-3xl font-bold md:text-4xl waviy">
                    I'm Hector del Angel.
                    {/* <span style={{--i/:1}}>H</span>
                    <span style={{--i/:2}}>e</span>
                    <span style={{--i/:3}}>c</span>
                    <span style={{--i/:4}}>t</span>
                    <span style={{--i/:5}}>o</span>
                    <span style={{--i/:6}}>r</span>
                    {/* <span style="--i/:3">c</span>
                    <span style="--i/:4">t</span>
                    <span style="--i/:5">o</span>
                    <span style="--i/:6">r</span>
                    <span style="--i/:7"> </span>
                    <span style="--i/:8">d</span>
                    <span style="--i/:9">e</span>
                    <span style="--i/:10">l</span>
                    <span style="--i/:11"> </span>
                    <span style="--i/:12">A</span>
                    <span style="--i/:13">n</span>
                    <span style="--i/:14">g</span>
                    <span style="--i/:15">e</span>
                    <span style="--i/:16">l</span> */}
                </h1>
                <p className="mt-2 text-2xl">
                    Just another full-stack developer
                </p>
                <p className="text-xl">making my way through the webverse.</p>
                <p className="mt-2">
                    Have a peak around or you could reach me here:
                </p>
                <div className="flex flex-row mt-10">
                    <div className="p-2 text-white bg-gray-700 rounded-full hover:cursor-pointer">
                        <AiFillGithub />
                    </div>
                    <div className="p-2 ml-4 text-white bg-gray-700 rounded-full hover:cursor-pointer">
                        <AiFillLinkedin />
                    </div>
                </div>
            </div>
        </div>
    )
}
