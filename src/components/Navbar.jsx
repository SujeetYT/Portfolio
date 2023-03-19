import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"

export const Navbar = () => {
  const [dark, setDark] = useState(false);
  return (
    <nav className="w-[80%] relative p-2 mx-auto bg-black rounded-b-xl shadow-lg text-white md:flex md:justify-between md:items-center">
      <span className='text-2xl'>
        <Link to='/'><h3 className='font-myCustomFont font-bold text-white'>S.K.</h3></Link>
      </span>

      <div className='hidden md:flex md:justify-center md:items-center space-x-6'>
        <ul className='flex justify-between align-middle'>
          <li className='ml-5 hover:text-orange1'><Link to='/'>Home</Link></li>
          <li className='ml-5 hover:text-orange1'><Link to='/skills'>Skills</Link></li>
          <li className='ml-5 hover:text-orange1'><Link to='/contact-me'>Contact Me</Link></li>
        </ul>

        <div className='ml-5' onClick={()=>setDark(!dark)}>
          {dark?<MdOutlineLightMode size={20}/>:<MdOutlineDarkMode size={20}/>}
        </div>
      </div>
    </nav>
  )
}
