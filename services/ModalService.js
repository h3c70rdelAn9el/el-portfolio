// const ModalService = {
//     on(event, callback) {
//         document.addEventListener(event, (e) => callback(e.detail))
//     },
//     open(component, props = {}) {
//         document.dispatchEvent(
//             new CustomEvent('open', { detail: { component, props } })
//         )
//     },
// }
const ModalService = {
    listeners: {},

    on(eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = []
        }
        this.listeners[eventName].push(callback)
    },

    off(eventName, callback) {
        if (!this.listeners[eventName]) {
            return
        }
        const index = this.listeners[eventName].indexOf(callback)
        if (index !== -1) {
            this.listeners[eventName].splice(index, 1)
        }
    },

    emit(eventName, data) {
        if (!this.listeners[eventName]) {
            return
        }
        this.listeners[eventName].forEach((callback) => {
            callback(data)
        })
    },

    open({ component, props }) {
        this.emit('open', { component, props })
    },
}

export default ModalService
