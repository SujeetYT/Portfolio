import React from 'react'
import Card from './Card'
// import rectangle from "../assets/svgs/rectangle1.svg"


const About = () => {
  return (
    <Card classes={`bg-orange1 before:bg-orange2 after:bg-orange2 overflow-hidden`} title="About">
      <p className='px-16 md:px-28'>I’m Sujeet Kumar, student at Maharaja Surajmal Institute of Technology New Delhi, currently pursuing B.Tech in Information Technology. My field of Interest's are building new Web Technologies and Products and also in areas related to Frontend Design. I’ve also worked on full stack web application which includes MongoDB, ExpressJs, ReactJs, NodeJs, Building APIs, Using APIs. Also willing to learn new technologies.</p>
    </Card>
  )
}

export default About