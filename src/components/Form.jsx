import React from 'react'

const Form = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-cyan-700 md:w-[25rem] z-10 relative">
      <form action="" className='flex flex-col space-y-4'>
        <div>
          <label htmlFor="name" className='text-xl font-semibold'>Name</label>
          <input type="text" placeholder='Your Full Name' name="name" className='ring-1 ring-slate-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-700 my-2'/>
        </div>
        <div>
          <label htmlFor="email" className='text-xl font-semibold'>Email Address</label>
          <input type="email" placeholder='Your email' name="email" className='ring-1 ring-slate-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-700 my-2'/>
        </div>
        <div>
          <label htmlFor="message" className='text-xl font-semibold'>Message</label>
          <textarea name="message" rows="4" placeholder='Your Comment' className='ring-1 ring-slate-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-700 my-2'></textarea>
        </div>
        <button type="submit" className='inline-block self-end bg-cyan-700 uppercase rounded-lg px-6 py-2 font-bold text-white text-sm'>Send Message</button>
      </form>
    </div>
  )
}

export default Form