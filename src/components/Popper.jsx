import React from 'react'

const Popper = ({ children }) => {


    return (
        <div className="relative bg-blue-200">
            {children}

            <div className="w-32 absolute bg-gray-300 rounded-b-3xl h-28 " style={{ right: "-100px", top: "0px" }}>
                popover
            </div>


        </div>
    )
}

export default Popper
