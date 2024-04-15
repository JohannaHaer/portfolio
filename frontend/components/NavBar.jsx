import React from 'react'

const NavBar = () => {
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                    <Link>Hallo</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar