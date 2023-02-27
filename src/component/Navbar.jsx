import React from 'react'

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Interviews</div>
            <div>
                <button>left</button>
                <button>right</button>
            </div>
        </div>

    )
}

export default Navbar