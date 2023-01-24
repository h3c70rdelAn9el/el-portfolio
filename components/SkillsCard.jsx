export const SkillsCard = (props) => {
    return (
        <div
            className="flex flex-row items-center justify-between p-2 px-4 align-middle duration-300 ease-in bg-gray-700 border rounded-md shadow-xl lg:px-10 md:w-64 hover:scale-105"
            style={props.style}>
            <p className="text-xs sm:text-sm md:text-xl">{props.name}</p>
            <props.icon className="text-lg md:text-xl lg:text-6xl" />
        </div>
    )
}
