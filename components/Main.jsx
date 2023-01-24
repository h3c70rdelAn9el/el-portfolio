import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
// import keyboard from '../public/assets/images/keyboard.jpeg'

import Background from '../public/assets/images/keyboard.jpeg'

export const Main = () => {
    return (
        <div className="bg-black" id="home">
            <div
                className="relative z-10 h-screen bg-cover bg-keyboard opacity-30"
                style={{
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'cover',
                }}></div>
            <div className="absolute top-0 z-20 flex flex-col items-center justify-center w-full pb-4 mx-auto text-blue-200 pt-80">
                <h1 className="text-5xl font-bold md:text-6xl">Hey there!</h1>
                <h1 className="text-3xl font-bold md:text-4xl">
                    I'm Hector del Angel
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
