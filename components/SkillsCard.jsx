export const SkillsCard = (props) => {
    return (
        <div
            className="flex flex-row items-center justify-between p-2 px-10 align-middle duration-300 bg-gray-700 border rounded-md shadow-xl md:w-64 hover:scale-105"
            style={props.style}>
            <p className="text-xl">{props.name}</p>
            <props.icon className="text-6xl" />
        </div>
    )
}
