import React from 'react'
import Form from '../components/Form'
import {IoLogoLinkedin, IoLogoGithub, IoMail, IoLogoTwitter} from "react-icons/io5"

const ContactMe = () => {
  const email = 'sujeet7982422191@gmail.com'
  const linkedIn = 'https://www.linkedin.com/in/sujeetyt/'
  const gitHub = 'https://github.com/SujeetYT/'
  const twitter = 'https://twitter.com/technosujeet'

  return (
    <>
      <div className='z-10 relative w-[100%] min-h-screen flex justify-center items-center p-2'>
        <div className='flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white md:flex-row md:space-y-0 md:space-x-6 overflow-hidden'>
          <div className='flex flex-col space-y-8 justify-around'>
            <div>
              <h1 className='font-bold text-4xl'>Contact Me</h1>
              <p className='text-cyan-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, reprehenderit. </p>
            </div>
            <div className="my-4 flex flex-col space-y-2">
              <div className='inline-flex space-x-2 items-center'>
                <span><IoMail className='text-teal-300 text-xl'/></span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <span><IoLogoLinkedin className='text-teal-300 text-xl'/></span>
                <a href={`${linkedIn}`} target="_blank" rel="noopener noreferrer">@sujeetyt</a>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <span><IoLogoGithub className='text-teal-300 text-xl'/></span>
                <a href={`${gitHub}`} target="_blank" rel="noopener noreferrer">@SujeetYT</a>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <span><IoLogoTwitter className='text-teal-300 text-xl'/></span>
                <a href={`${twitter}`} target="_blank" rel="noopener noreferrer">@technosujeet</a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-40 h-40 bg-teal-300 rounded-full z-0 -right-28 -top-28"></div>
            <Form/>
            <div className="absolute w-40 h-40 bg-teal-300 rounded-full z-0 -left-28 -bottom-16"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe