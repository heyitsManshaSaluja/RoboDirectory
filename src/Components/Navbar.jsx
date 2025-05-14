import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center bg-black text-white p-4 '>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/robos">Robos</Link></li>
        {/* <li><Link to="/settings">Settings</Link></li> */}
        
       

    </div>
    
    </>
  )
}

export default Navbar
