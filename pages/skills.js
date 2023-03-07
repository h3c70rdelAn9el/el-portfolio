import Layout from '@/components/layout'
import { useState } from 'react'
import { Modal, ModalContents, ModalOpenButton } from '@/components/Modal'
import { skillData, icons } from '@/data'

const Skills = () => {
    const skills = Object.keys(skillData).map((key) => {
        return {
            // key: key,
            value: skillData[key],
        }
    })

    const [show, setShowModal] = useState(false)

    return (
        <Layout>
            <div className="w-full p-2 mt-28" id="skills">
                <div className="flex flex-col justify-center h-full max-w-5xl mx-auto">
                    <h2 className="-mb-8 text-3xl font-bold text-center text-primary">
                        Skills
                    </h2>
                    <div className="grid w-2/3 max-w-5xl grid-cols-1 gap-4 p-2 px-8 pt-0 mx-auto lg:w-full sm:px-4 sm:gap-6 mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                        {skillData.map((skill) => {
                            const icon = skill.icon

                            return (
                                <Modal id="modal" key={skill.name}>
                                    <ModalOpenButton>
                                        <div
                                            className="flex flex-row items-center justify-between h-16 p-2 px-4 align-middle duration-300 ease-in bg-gray-700 border rounded-md shadow-xl md:h-full curson-pointer lg:px-10 lg:w-64 hover:scale-105 skill-card modal-card"
                                            style={skill.style}
                                            icon={icon.component}>
                                            <p
                                                className="text-md sm:text-sm md:text-xl"
                                                icon={skill.icon}>
                                                {skill.name}
                                            </p>
                                            <p className="text-lg md:text-xl lg:text-6xl">
                                                {icon.component}
                                            </p>
                                        </div>
                                    </ModalOpenButton>
                                    <ModalContents
                                        title="hi"
                                        show={show}
                                        style={skill.modalContents.style}>
                                        {skill.modalContents.body}
                                    </ModalContents>
                                </Modal>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Skills
