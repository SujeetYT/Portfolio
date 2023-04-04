import React from 'react'

const Background = () => {
  return (
    <>
        <div className="fixed w-96 h-96 rounded-full -top-28 -left-28 translate-x-[-50%] bg-yellow-400 mix-blend-multiply filter blur-3xl opacity-50 animate-blob select-none z-[0]"></div>
        <div className="fixed w-72 h-72 rounded-full bottom-0 right-0 bg-pink-400 mix-blend-multiply filter blur-3xl opacity-50 animate-blob select-none z-[0]"></div>
    </>
  )
}

export default Background