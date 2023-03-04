import React from 'react'
import Modal from '@/components/Modal'
import ModalBody from '@/components/ModalBody'
import ModalFooter from '@/components/ModalFooter'
import ModalHeader from '@/components/ModalHeader'

export default function TestModal(props) {
    return (
        <div>
            <Modal>
                <ModalHeader>
                    <h2>Modal Header 1</h2>
                </ModalHeader>
                <ModalBody>
                    <p>Modal Body 1</p>
                </ModalBody>
                <ModalFooter>
                    <button onClick={props.close}>Close</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
