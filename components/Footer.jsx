import React from 'react'

const Footer = () => {
    return (
        // write the current date in javascript
        <div className="flex items-center justify-center w-full h-16 bg-black text-secondary">
            <p>© {new Date().getFullYear()} Hector del Angel</p>
        </div>
    )
}

export default Footer
