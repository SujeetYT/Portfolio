import React from 'react'
import "./card.css"

const Card = ({classes, children, title, image}) => {
  return (
    <section id={title} className='relative w-[100%] flex justify-center items-center my-5'>
      <div className={`shape w-[85%] text-white rounded-3xl ${classes} py-6`}>
        <img src={image}/>
        <h3 className='text-3xl font-bold m-6'>{title}</h3>
        {children}
      </div>      
      
    </section>
  )
}

export default Card