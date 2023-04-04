import React from 'react'

const Tile = ({title, img, bgcolor}) => {
  return (
    <div className={`w-80 h-40 relative flex flex-col justify-center items-center p-2 ${bgcolor} rounded-xl shadow-2xl bg-gradient-to-tr hover:bg-gradient-to-r transition-all`}>
        <div className="w-24 h-24 my-2 p-3 bg-no-repeat bg-center bg-contain" style={{backgroundImage: `url(${img})`}}></div>
        <h2 className='text-white text-xl font-semibold'>{title}</h2>
    </div>
  )
}

export default Tile