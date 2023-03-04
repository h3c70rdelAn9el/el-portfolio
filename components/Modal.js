// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom'

// const Modal = ({ show, children, onClose, title }) => {
//     const [isBrowser, setIsBrowser] = useState(false)

//     useEffect(() => {
//         setIsBrowser(true)
//     }, [])

//     const handleClose = (e) => {
//         e.preventDefault()
//         onClose()
//     }

//     const modalContent = show ? (
//         <div className="modal-overlay ">
//             <div className="w-2/3 mx-auto mt-20 modal">
//                 <div className="relative flex flex-col w-full p-6 overflow-hidden bg-white border-0 rounded-lg shadow-lg outline-none h-96 focus:outline-none">
//                     {title}
//                     <button
//                         className="absolute z-50 p-2 text-3xl font-semibold leading-none text-black bg-transparent border-0 rounded-full outline-none opacity-50 top-1 right-1 focus:outline-none hover:opacity-75"
//                         onClick={handleClose}>
//                         <span className="block w-6 h-6 text-xl text-black bg-transparent outline-none opacity-50 focus:outline-none hover:opacity-85">
//                             X
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     ) : null

//     if (isBrowser) {
//         return ReactDOM.createPortal(
//             modalContent,
//             document.getElementById('modal')
//         )
//     } else {
//         return null
//     }

//     return <div>Modal</div>
// }

// export default Modal

// import React from 'react'
// import ReactDOM from 'react-dom'

// // const modalRootEl = document.getElementById('modal-root')
// const onClose = () => {}

// const Modal = (children) => {
//     if (!onClose) return null

//     return children
// }

// export default Modal

// import React, { useState, useContext, cloneElement, createContext } from 'react'

// const callAll =
//     (...fns) =>
//     (...args) =>
//         fns.forEach((fn) => fn && fn(...args))

// const ModalContext = createContext()

// function Modal(props) {
//     // const [isOpen, setIsOpen] = useState(true)
//     // return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
//     // return (
//     //     <ModalContext.Provider value={[isOpen, setIsOpen]}>
//     //         {props.children}
//     //     </ModalContext.Provider>
//     // )
//     // return <div>hello this is from modal</div>
//     const [isOpen, setIsOpen] = useState(false)
//     return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
// }

// function ModalDismissButton({ children: child }) {
//     const [, setIsOpen] = useContext(ModalContext)

//     return cloneElement(child, {
//         onClick: callAll(() => setIsOpen(false), child.props.onClick),
//     })
// }

// function ModalOpenButton({ children: child }) {
//     const [, setIsOpen] = useContext(ModalContext)

//     return cloneElement(child, {
//         onClick: callAll(() => setIsOpen(true), child.props.onClick),
//     })
// }

// function ModalContentsBase(props) {
//     const [isOpen, setIsOpen] = useContext(ModalContext)
//     return (
//         <div open={isOpen} onClose={() => setIsOpen(false)} {...props}>
//             {props.children}
//         </div>
//     )
// }

// function ModalContents({ title, children, showModal, ...props }) {
//     showModal = false
//     return (
//         <ModalContentsBase {...props}>
//             <div style={{ padding: '20px' }}>
//                 <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                     <ModalDismissButton>
//                         <i
//                             style={{
//                                 position: 'absolute',
//                                 top: '4px',
//                                 right: '10px',
//                                 cursor: 'pointer',
//                                 fontSize: '24px',
//                                 fontFamily: 'sans-serif',
//                                 fontStyle: 'normal',
//                             }}>
//                             x
//                         </i>
//                     </ModalDismissButton>
//                 </div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//         </ModalContentsBase>
//     )
// }

// export { Modal, ModalDismissButton, ModalOpenButton, ModalContents }

// fourth attempt from nnajivictor
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
            <div className="w-2/3 mx-auto mt-20 modal">
                <div className="relative flex flex-col w-full p-6 overflow-hidden bg-gray-200 border-0 rounded-lg outline-none h-96 focus:outline-none">
                    <button
                        className="absolute z-50 p-2 text-3xl font-semibold leading-none text-black bg-transparent border-0 rounded-full outline-none opacity-50 top-1 right-1 focus:outline-none hover:opacity-75"
                        onClick={() => setIsOpen(false)}>
                        <span className="block w-6 h-6 pb-1 text-xl text-black bg-transparent outline-none opacity-50 focus:outline-none hover:opacity-85">
                            x
                        </span>
                    </button>
                    <div class="mt-10 text-left p-2 ml-2 sm:ml-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal, ModalOpenButton, ModalContents }

export default Modal
