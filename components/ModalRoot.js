import React, { useState, useEffect } from 'react'
import ModalService from '../services/ModalService'

function ModalRoot() {
    const [modal, setModal] = useState({})

    // useEffect(() => {
    //     ModalService.on('open', ({ component, props }) => {
    //         setModal({
    //             component,
    //             props,
    //             close: (value) => {
    //                 setModal({})
    //             },
    //         })
    //     })
    // }, [])

    // uuseEffect to replace the above useEffect .on not a function
    useEffect(() => {
        ModalService.on('open', ({ component, props }) => {
            setModal({
                component,
                props,
                close: (value) => {
                    setModal({})
                },
            })
        })
    }, [])

    // useEffect(() => {
    //     const handleOpen = ({ component, props }) => {
    //         setModal({
    //             component,
    //             props,
    //             close: (value) => {
    //                 setModal({})
    //             },
    //         })
    //     }
    //     ModalService.on('open', handleOpen)

    //     return () => {
    //         ModalService.off('open', handleOpen)
    //     }
    // }, [])

    const ModalComponent = modal.component ? modal.component : null

    return (
        <div>
            {ModalComponent && (
                <ModalComponent
                    {...modal.props}
                    close={modal.close}
                    className={ModalComponent ? 'block' : ''}
                />
            )}
        </div>
    )
}

export default ModalRoot
