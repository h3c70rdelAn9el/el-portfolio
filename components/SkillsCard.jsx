import React, { useState } from 'react'
import Modal from './Modal'
import { ModalContents, ModalOpenButton } from '@/components/Modal'
import TestModal from './TestModal'

export const SkillsCard = (props) => {
    const [show, setShowModal] = useState(false)

    return (
        <div>
            <div
                className="flex flex-row items-center justify-between p-2 px-4 align-middle duration-300 ease-in bg-gray-700 border rounded-md shadow-xl cursor-default lg:px-10 md:w-64 hover:scale-105"
                style={props.style}>
                <p className="text-xs sm:text-sm md:text-xl">{props.name}</p>
                <props.icon className="text-lg md:text-xl lg:text-6xl" />
            </div>
            {/* <button
                className="px-4 py-2 text-white rounded-md bg-primary"
                onClick={() => setShowModal(true)}>
                Open Modal
            </button>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                onClose={() => setShowModal(false)}
                title={props.title}
                description={props.description}
                icon={props.icon}></Modal> */}

            {/* <TestModal>
                <ModalOpenButton>

                    <button
                        className="px-4 py-2 text-white rounded-md bg-primary"
                        onClick={() => setShowModal(true)}>
                        Open Modal
                    </button>
                </ModalOpenButton>
                <ModalContents title="Hi!" show={show}>
                    let's see if this works
                </ModalContents>
            </TestModal> */}
        </div>
    )
}
