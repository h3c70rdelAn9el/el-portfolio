import React, { useState } from 'react'

const ModalContext = React.createContext(null)

const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const value = [isOpen, setIsOpen]

    return <ModalContext.Provider value={value} {...props} />
}

function useModal() {
    const context = React.useContext(ModalContext)
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider')
    }
    return context
}

const ModalOpenButton = ({ children }) => {
    const [, setIsOpen] = useModal()
    return React.cloneElement(children, {
        onClick: () => setIsOpen(true),
    })
}

const ModalContents = ({ children }) => {
    const [isOpen, setIsOpen] = useModal()
    if (!isOpen) return null
    return (
        <div className="modal-overlay">
            <div className="w-2/3 mx-auto mt-20 cursor-pointer modal">
                <div className="relative flex flex-col w-full p-6 overflow-hidden bg-gray-200 border-0 rounded-lg outline-none h-96 focus:outline-none">
                    <button
                        className="absolute z-50 p-2 text-3xl font-semibold leading-none text-black bg-transparent border-0 rounded-full outline-none opacity-50 top-1 right-1 focus:outline-none hover:opacity-75"
                        onClick={() => setIsOpen(false)}>
                        <span className="block w-6 h-6 pb-1 text-xl text-black bg-transparent outline-none opacity-50 focus:outline-none hover:opacity-85">
                            x
                        </span>
                    </button>
                    <div class="mt-10 text-left p-2 ml-2 sm:ml-3 modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal, ModalOpenButton, ModalContents }

export default Modal
