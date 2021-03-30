import React from 'react'

const Backdrop = ({ click, show }) => {
    return (
        show &&
        <div className="backdrop" onClick={click}>
            Backdrop
        </div>
    )
}

export default Backdrop
