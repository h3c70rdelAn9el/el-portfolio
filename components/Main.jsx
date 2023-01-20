import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold">Hey there!</h1>
            <h1 className="text-5xl font-bold">I'm Hector del Angel</h1>
            <p className="text-2xl mt-2">Just another full-stack developer</p>
            <p className="text-xl">making my way through the webverse.</p>
            <p className="mt-2">
                Have a peak around or you could reach me here:
            </p>
            <div className="flex flex-row mt-10">
                <div className="bg-gray-700 rounded-full text-white hover:cursor-pointer p-2">
                    <AiFillGithub />
                </div>
                <div className="bg-gray-700 rounded-full text-white hover:cursor-pointer p-2 ml-4">
                    <AiFillLinkedin />
                </div>
            </div>
        </div>
    )
}
