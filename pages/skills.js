import Layout from '@/components/layout'
import { useState } from 'react'
import { Modal, ModalContents, ModalOpenButton } from '@/components/Modal'
import { skillData, icons } from '@/data'

const Skills = () => {
    const skills = Object.keys(skillData).map((key) => {
        return {
            key: key,
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
                    {/*
                    <div className="hidden md:block">
                        <SkillsCard
                            name="HTML"
                            icon={FaHtml5}
                            style={{
                                color: '#e34c26',
                                border: '1px solid #e34c26',
                            }}
                        />
                    </div> */}
                    <div className="grid w-2/3 grid-cols-1 gap-2 p-2 pt-0 mx-auto sm:w-full lg:p-16 md:p-0 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                        {skillData.map((skill, key) => {
                            const icon = skill.icon

                            return (
                                <Modal>
                                    <ModalOpenButton>
                                        <div
                                            className="flex flex-row items-center justify-between p-2 px-4 align-middle duration-300 ease-in bg-gray-700 border rounded-md shadow-xl curson-pointer lg:px-10 md:w-64 hover:scale-105 skill-card"
                                            style={skill.style}
                                            icon={icon.component}
                                            key={key}>
                                            <p
                                                className="text-xs sm:text-sm md:text-xl"
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
