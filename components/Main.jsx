import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
// import keyboard from '../public/assets/images/keyboard.jpeg'

import Background from '../public/assets/images/keyboard.jpeg'
import Weather from './Weather'

export const Main = () => {
    return (
        <div className="h-screen bg-black" id="home">
            <div
                className="relative z-10 h-screen bg-cover bg-keyboard opacity-30"
                style={{
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'cover',
                }}></div>
            <div className="absolute z-50 flex flex-col items-center justify-center pb-4 mx-auto text-blue-200 w-[550px] main-section h-min">
                <h1 className="text-5xl font-bold md:text-6xl">Hey there!</h1>
                <h1 className="text-3xl font-bold md:text-4xl waviy">
                    I am Hector del Angel
                </h1>
                <div className="flex flex-row pt-2">
                    <p className="mr-1">
                        I&apos;m from Los Angeles, CA, where it is currently
                    </p>
                    <Weather />.
                </div>
                {/* weather */}

                <p className="mt-2 text-2xl">
                    Just another full-stack d3veloper
                </p>
                <p className="text-xl">making my way through the webverse.</p>
                <p className="mt-2">
                    Have a peak around or you could reach me here:
                </p>
                <div className="flex flex-row mt-10 z-[99999]">
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
    )
}
