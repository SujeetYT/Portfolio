import React from 'react'
import sujeet from "../assets/svgs/sujeet.svg"
import { MdOutlineFileDownload } from "react-icons/md";
import test from  "../assets/images/css.png"

const Hero = () => {
  return (
    <section id='hero' className='w-full my-5 flex flex-col-reverse justify-around items-center md:flex-row z-10 relative'>
      <div className='px-5 flex flex-col justify-around items-center text-center'>
        <h3 className='text-3xl my-2 font-bold'>Hi, I'm</h3>
        <h1 className='text-6xl my-2 font-black text-orange2'>Sujeet Kumar</h1>
        <h3 className='text-3xl my-2 font-bold'>I build things for the web</h3>
        <button type='button' className='p-2 px-5 my-2 rounded-full bg-gradient-to-br from-green1 to-green2 shadow-lg  text-white hover:shadow-green2 transition-shadow duration-200 focus:outline-none focus:bg-green1'>
          <a href={test} download>Download Resume</a>
          <MdOutlineFileDownload style={{display:'inline', margin: '0 5px 0 5px', scale:'1.2'}}/>
        </button>
      </div>
      <div className='w-[50%] md:w-[30%] '>
        <img src={sujeet} width="100%"/>
      </div>
    </section>
  )
}

export default Hero