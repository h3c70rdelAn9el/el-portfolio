import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-4 pt-80">
            <h1 className="text-5xl font-bold md:text-6xl">Hey there!</h1>
            <h1 className="text-3xl font-bold md:text-4xl">
                I'm Hector del Angel
            </h1>
            <p className="mt-2 text-2xl">Just another full-stack developer</p>
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
    )
}
