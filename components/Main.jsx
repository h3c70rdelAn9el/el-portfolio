import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
// import keyboard from '../public/assets/images/keyboard.jpeg'

import Background from '../public/assets/images/keyboard.jpeg'
import Weather from './Weather'

export const Main = () => {
    return (
        <div className="h-screen overflow-hidden bg-black" id="home">
            <div
                className="relative z-10 h-screen bg-cover bg-keyboard opacity-30"
                style={{
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'cover',
                }}></div>
            <div className="absolute z-50 flex flex-col items-center justify-center w-full pb-4 mx-auto text-blue-200 font-source main-section h-min">
                <h1 className="text-3xl md:text-5xl">Hey there!</h1>
                <h1 className="text-2xl md:text-4xl waviy">
                    I&apos;m Hector del Angel,
                </h1>

                <div className="px-2 text-md md:text-base">
                    <div className="flex flex-row pt-2">
                        <div className="mr-2 text-md md:text-base">
                            from Los Angeles, CA, where it is
                            <Weather />
                        </div>
                    </div>

                    <div className="">
                        <p className="mt-2">
                            Just another full-stack d3veloper
                        </p>
                        <p>making my way through the webverse.</p>
                        <p className="mt-2">
                            Have a peak around or you could reach me here:
                        </p>
                    </div>
                    <div className="flex flex-row justify-center mt-4 z-[99999]">
                        <div className="social-link">
                            <a
                                href="https://github.com/h3c70rdelan9el"
                                target="_blank"
                                rel="noreferrer">
                                <AiFillGithub />
                            </a>
                        </div>
                        <div className="social-link">
                            <a
                                href="https://www.linkedin.com/in/hectordelangel/"
                                target="_blank"
                                rel="noreferrer">
                                <AiFillLinkedin />
                            </a>
                        </div>
                        <div className="social-link">
                            <a
                                href="mailto:hectordelangel@gmail.com"
                                target="_blank"
                                rel="noreferrer">
                                <AiOutlineMail />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
