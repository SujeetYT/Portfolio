import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import Hamburger from 'hamburger-react';

export const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="w-[100%] md:w-[85%] sticky top-0 left-0 z-50 mx-auto bg-black md:rounded-b-xl shadow-lg text-white md:flex md:justify-between md:items-center">
      <div className='flex justify-between item-center'>
        <span className='my-3 mx-5'>
          <Link to='/'><h3 className='font-myCustomFont text-xl font-bold text-white'>S.K.</h3></Link>
        </span>
        <span className='md:hidden block mx-3'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>  
        </span>
      </div>

      <ul className={`md:flex md:items-center items-center z-[1] md:static absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 ${isOpen?'top-20':'top-[-490px]'}`}>
        <li className='mx-4 my-6 text-center md:my-0 hover:text-orange1'><Link to='/'>Home</Link></li>
        <li className='mx-4 my-6 text-center md:my-0 hover:text-orange1'><Link to='/skills'>Skills</Link></li>
        <li className='mx-4 my-6 text-center md:my-0 hover:text-orange1'><Link to='/contact-me'>Contact Me</Link></li>
        <li className='mx-4 my-6 flex justify-center items-center md:my-0 hover:text-orange1' onClick={()=>setDark(!dark)}>
          {dark?<MdOutlineLightMode size={20}/>:<MdOutlineDarkMode size={20}/>}
        </li>
      </ul>
    </nav>
  )
}
