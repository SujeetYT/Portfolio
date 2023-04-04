import React from 'react'
import Tile from '../components/Tile'
import TileData from './../data/TileData'

const Skills = () => {
  return (
    <>
      <h2 className='text-center text-3xl font-bold m-6'>My Skills</h2>
      <div className='w-[100%] my-10 justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16'>
        {TileData && TileData.map(({ title, img, bgcolor}, idx)=>
        <Tile 
          key={idx} 
          title={title} 
          img={img} 
          bgcolor={bgcolor}
        />)}
      </div>
    </>
  )
}

export default Skills