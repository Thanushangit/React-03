import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar position-fixed top-0 start-0'>

        <div className="logo">
            <h3>vedha's</h3>
        </div>
        <div className="icons">
            <p><i className="fa-solid fa-magnifying-glass"></i></p>
            <p><i className="fa-solid fa-user"></i></p>
            <p><i className="fa-solid fa-bag-shopping"></i></p>
        </div>

    </div>
  )
}

export default Navbar