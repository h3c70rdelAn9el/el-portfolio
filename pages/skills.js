import Image from 'next/image'
import {
    FaBootstrap,
    FaGithub,
    FaHtml5,
    FaLaravel,
    FaNodeJs,
    FaReact,
    FaVuejs,
    FaAlpinejs,
} from 'react-icons/fa'
import { SiAlpinedotjs, SiTailwindcss } from 'react-icons/si'
// import { SkillsCard } from './SkillsCard'
import { SkillsCard } from '../components/SkillsCard'
import Layout from '@/components/layout'
import { useState } from 'react'
import { Modal, ModalContents, ModalOpenButton } from '@/components/Modal'
import ModalRoot from '@/components/ModalRoot'
import TestModal from '@/components/TestModal'
import ModalService from '@/services/ModalService'
import ReactSkill from '@/components/skills/ReactSkill'
import VueSkill from '@/components/skills/VueSkill'
import { skillData, icons } from '@/data'
import Testing from '@/components/Testing'

const Skills = () => {
    const skills = Object.keys(skillData).map((key) => {
        return {
            key: key,
            value: skillData[key],
        }
    })

    const [show, setShowModal] = useState(false)

    // const addModal = () => {
    //     ModalService.open({ component: TestModal })
    // }

    return (
        <Layout>
            <div className="w-full p-2 mt-28" id="skills">
                <div className="flex flex-col justify-center h-full max-w-5xl mx-auto">
                    <h2 className="-mb-8 text-3xl font-bold text-center text-primary">
                        Skills
                    </h2>
                    <div className="grid w-2/3 grid-cols-1 gap-2 p-2 pt-0 mx-auto sm:w-full lg:p-16 md:p-0 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                        {/* <SkillsCard
                            name="React"
                            icon={FaReact}
                            style={{
                                color: '#61DBFB',
                                border: '1px solid #61DBFB',
                            }}
                        /> */}
                        <ReactSkill />
                        {/* <SkillsCard
                            name="Vue"
                            icon={FaVuejs}
                            style={{
                                color: '#42b883',
                                border: '1px solid #42b883',
                            }}
                        /> */}
                        <VueSkill />
                        <SkillsCard
                            name="Alpine.js"
                            icon={SiAlpinedotjs}
                            style={{ color: '#ffffff' }}
                        />

                        <SkillsCard
                            name="Laravel"
                            icon={FaLaravel}
                            style={{
                                color: '#ff2d20',
                                border: '1px solid #ff2d20',
                            }}
                        />

                        <SkillsCard
                            name="Node.js"
                            icon={FaNodeJs}
                            style={{
                                color: '#3c873a',
                                border: '1px solid #3c873a',
                            }}
                        />

                        <SkillsCard
                            name="Tailwind"
                            icon={SiTailwindcss}
                            style={{
                                color: '#06b6d4',
                                border: '1px solid #06b6d4',
                            }}
                        />

                        <SkillsCard
                            name="Bootstrap"
                            icon={FaBootstrap}
                            style={{
                                // color: '#563d7c',
                                // border: '1px solid #563d7c',
                                color: 'white',
                                border: '1px solid white',
                            }}
                        />

                        <SkillsCard
                            name="Git"
                            icon={FaGithub}
                            style={{
                                color: '#ffffff',
                                border: '1px solid white',
                            }}
                        />

                        <div className="hidden md:block">
                            <SkillsCard
                                name="HTML"
                                icon={FaHtml5}
                                style={{
                                    color: '#e34c26',
                                    border: '1px solid #e34c26',
                                }}
                            />
                        </div>

                        <div
                            type="button"
                            class="cursor-pointer"
                            onClick={() => setShowModal(true)}>
                            <SkillsCard
                                name="Git"
                                icon={FaGithub}
                                style={{
                                    color: '#ffffff',
                                    border: '1px solid white',
                                }}
                            />
                            {/* <Modal
                                show={showModal}
                                onClose={() => setShowModal(false)}
                                title=" Modal">
                                <div className="flex flex-col items-center justify-center w-full h-full">
                                    <h1 className="text-2xl font-bold text-center text-primary">
                                        github modal
                                    </h1>
                                </div>
                            </Modal> */}
                            <Modal>
                                <ModalOpenButton>
                                    {/* <button>open this ! modal</button> */}
                                    {/* add a button to open the modal */}

                                    <div
                                        className="flex flex-row items-center justify-between p-2 px-4 text-white align-middle duration-300 ease-in bg-gray-700 border rounded-md shadow-xl cursor-pointer lg:px-10 md:w-64 hover:scale-105"
                                        onClick={() => setShowModal(true)}>
                                        <p className="text-xs sm:text-sm md:text-xl">
                                            Git
                                        </p>
                                        <FaGithub className="text-lg md:text-xl lg:text-6xl" />

                                        {/* <p className="text-xs sm:text-sm md:text-xl"></p> */}
                                        {/* <icon className="text-lg md:text-xl lg:text-6xl" /> */}
                                    </div>
                                </ModalOpenButton>
                                <ModalContents title="Hi!" show={show}>
                                    My proficiency in Git, has enabled me to
                                    efficiently manage my code, track changes,
                                    revert to previous versions if needed, and
                                    collaborate with others. I have found this
                                    is an invaluable skill in enhancing my
                                    productivity and efficiency in my code.
                                </ModalContents>
                            </Modal>
                            {/* <ReactSkill /> */}
                        </div>
                        {/*
                        <div
                            type="button"
                            class="cursor-pointer"
                            onClick={() => setShowModal(!showModal)}>
                            <SkillsCard
                                name="Git"
                                icon={FaGithub}
                                style={{
                                    color: '#ffffff',
                                    border: '1px solid white',
                                }}
                            />
                            <Modal
                                show={showModal}
                                onClose={() => setShowModal(!showModal)}
                                title="Github 2nd Modal">
                                <div className="flex flex-col items-center justify-center w-full h-full">
                                    <h1 className="text-2xl font-bold text-center text-primary">
                                        github 2nd modal
                                    </h1>
                                </div>
                            </Modal>
                        </div> */}
                        {/* <div className="shadow-xl">
                            <p>Vue</p>
                            <FaReact className="text-6xl" />
                        </div> */}
                        {/* <div className="shadow-xl">
                            <p>React</p>
                            <FaReact className="text-6xl" />
                        </div>
                        <p>Vue</p>
                        <p>Alpine</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Tailwind</p>
                        <p>Bootstrap</p>
                        <p>Node</p>
                        <p>Laravel</p>
                        <p>JavaScript</p> */}
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between p-2 px-4 align-middle duration-300 ease-in bg-gray-700 border rounded-md shadow-xl cursor-default lg:px-10 md:w-64 hover:scale-105">
                <p className="text-xs sm:text-sm md:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    explicabo temporibus repellat debitis eveniet quasi
                    obcaecati officia veniam magni rem!
                </p>
                <icon className="text-lg md:text-xl lg:text-6xl" />
            </div>
            <div>
                {/* <button
                    className="px-4 py-2 text-white rounded-md bg-primary"
                    onClick={() => setShowModal(true)}>
                    Open Modal
                </button>
                <Modal show={showModal} onClose={() => setShowModal(false)}>
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <h1 className="text-2xl font-bold text-center text-primary">
                            ;alkdjf
                        </h1>
                    </div>
                </Modal> */}
                {/* <button onClick={addModal}>Open</button>
                <ModalRoot /> */}
                <div>
                    {/* skillData.map((data, key) => {
                        return( <SkillsCard key={key}>{data.name}</SkillsCard>
                        )}) */}

                    {/* {skillData.map((data, key) => {
                        ;<SkillsCard
                            // return <div key={key}>{data.name}</div>
                            name={data.name}
                            icon={data.icon}
                            key={key}
                        />
                    })} */}
                    {/* {skillData.map((data, key) => {
                        return <SkillsCard key={key}>{data.name}</SkillsCard>
                    })} */}
                    {/* use a map through function to go through the skill data with SkillsCard */}
                    {/* map through the skilldata using skills card */}
                    {/* {skills.map((skill) => (
                        <SkillsCard
                            name={skill.name}
                            icon={skill.icon}
                            key={skill.id}
                        />

                        // <div key={item.id}>{item.name}</div>
                    ))} */}
                    {/* map through skills */}
                    {/* map through the skilldata */}
                    {/* {skillData.map((data, key) => {
                        return
                        ;<SkillsCard key={key}>
                            <p>{data.name}</p>
                        </SkillsCard>
                        // return <SkillsCard key={key}>{data.name}</SkillsCard>
                    })} */}
                    {skillData.map((skill, key) => {
                        const icon = skill.icon

                        return (
                            <Modal>
                                <ModalOpenButton>
                                    <div
                                        className="flex flex-row items-center justify-between p-2 px-4 align-middle duration-300 ease-in bg-gray-700 border rounded-md shadow-xl cursor-default lg:px-10 md:w-64 hover:scale-105"
                                        style={skill.style}
                                        icon={icon.component}
                                        key={key}>
                                        <p
                                            className="text-xs sm:text-sm md:text-xl"
                                            icon={skill.icons}>
                                            {skill.name}
                                        </p>
                                        <div
                                            className="text-lg md:text-xl lg:text-6xl"
                                            icon={skill.icon}>
                                            {/* {skill.icon} */}
                                        </div>
                                        {/* pass the icon property here */}
                                        {/* {icon.component} */}
                                        <p className="text-lg md:text-xl lg:text-6xl">
                                            {icon.component}
                                        </p>
                                    </div>
                                </ModalOpenButton>
                                <ModalContents title="hi" show={show}>
                                    {skill.modalContents.body}
                                </ModalContents>
                            </Modal>
                        )
                        //              <div
                        //     className="flex flex-row items-center justify-between p-2 px-4 align-middle duration-300 ease-in bg-gray-700 border rounded-md shadow-xl cursor-default lg:px-10 md:w-64 hover:scale-105">
                        //     <p className="text-xs sm:text-sm md:text-xl">{skill.name}</p>
                        //     <div className="text-lg md:text-xl lg:text-6xl" >{skill.icon}</div>
                        // </div>
                    })}
                </div>
                <div>
                    <Testing skill />
                </div>
            </div>
        </Layout>
    )
}

export default Skills
