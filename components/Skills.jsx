import Image from 'next/image'
import {
    FaBootstrap,
    FaGithub,
    FaHtml5,
    FaLaravel,
    FaNodeJs,
    FaReact,
    FaVuejs,
} from 'react-icons/fa'
import { SiAlpinedotjs, SiTailwindcss } from 'react-icons/si'
import { SkillsCard } from './SkillsCard'
const Skills = () => {
    return (
        <div className="w-full p-2 mt-6" id="skills">
            <div className="flex flex-col justify-center h-full max-w-5xl mx-auto">
                <p className="pb-8 text-3xl font-bold text-center">Skills</p>
                <div className="grid grid-cols-2 gap-2 p-2 pt-0 mx-auto lg:p-16 md:p-0 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                    <SkillsCard
                        name="React"
                        icon={FaReact}
                        style={{
                            color: '#61DBFB',
                            border: '1px solid #61DBFB',
                        }}
                    />
                    <SkillsCard
                        name="Vue"
                        icon={FaVuejs}
                        style={{
                            color: '#42b883',
                            border: '1px solid #42b883',
                        }}
                    />
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
                            border: 'white',
                        }}
                    />

                    <SkillsCard
                        name="Git"
                        icon={FaGithub}
                        style={{ color: '#ffffff', border: 'white' }}
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
    )
}

export default Skills
