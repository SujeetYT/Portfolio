import React from 'react'
import sujeet from "../assets/svgs/sujeet.svg"
const Hero = () => {
  return (
    <section id='hero' className='w-full my-5 md:flex md:justify-around md:items-center'>
      <div>
          <h3 className='text-3xl font-bold'>Hi, I'm</h3>
          <h1 className='text-6xl my-2 font-black text-orange2'>Sujeet Kumar</h1>
          <h3 className='text-3xl font-bold'>I build things for the web</h3>
          <button type='button' className='p-2 px-5 my-2 rounded-full bg-gradient-to-r from-green1 to-green2 shadow-xl text-white hover:opacity-80'>Download Resume</button>
      </div>
      <div className='w-[30%] '>
          <img src={sujeet} width="100%"/>
      </div>
    </section>
  )
}

export default Hero