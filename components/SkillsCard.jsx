export const SkillsCard = (props) => {
    return (
        <div
            className="flex flex-row items-center justify-between p-2 px-10 align-middle bg-gray-700 border rounded-md shadow-xl md:w-64"
            // pass a style prop to the component
            style={props.style}>
            <p className="text-xl">{props.name}</p>
            <props.icon className="text-6xl" />
        </div>
    )
}
