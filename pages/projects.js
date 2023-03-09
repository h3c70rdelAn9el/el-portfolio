import Image from 'next/image'
import React, { useState } from 'react'
import Layout from '@/components/layout'
import { Modal, ModalContents, ModalOpenButton } from '@/components/Modal'
import { projects } from '@/data'

const Projects = () => {
    const [show, setShowModal] = useState(false)

    return (
        <Layout>
            <div className="max-w-5xl mx-auto mt-20">
                <h2
                    id="projects"
                    className="py-10 text-3xl text-center text-primary">
                    Projects
                </h2>

                <section className="grid grid-cols-1 gap-4 p-2 px-2 mx-12 sm:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project) => {
                        return (
                            <Modal id="modal" key={project.name}>
                                <ModalOpenButton className=" modal-card">
                                    <div className="flex flex-col items-center p-4 bg-gray-200 border-2 border-blue-700 rounded-lg shadow-lg cursor-pointer hover:border-blue-500 hover:border-2 ">
                                        <div className="">
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                width="300"
                                                height="200"
                                                className="mx-auto rounded-md"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h3 className="mt-2 text-lg font-semibold">
                                                {project.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {project.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </ModalOpenButton>
                                <ModalContents title={project.name} show={show}>
                                    {project.description}
                                    <div className="flex">
                                        <button
                                            className="px-4 py-2 mx-auto mt-4 text-sm text-white rounded-lg bg-primary hover:bg-secondary focus:outline-none focus:ring focus:ring-black focus:ring-opacity-50"
                                            style={project.link.style}>
                                            <a
                                                href={project.link.url}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                Site
                                            </a>
                                        </button>
                                    </div>
                                </ModalContents>
                            </Modal>
                        )
                    }, [])}
                </section>
            </div>
        </Layout>
    )
}

export default Projects
