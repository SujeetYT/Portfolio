import React from 'react'
import rectangle from "../assets/svgs/rectangle1.svg"


const About = () => {
  return (
    <section id="About" className='w-full relative border-r-2'>
      {/* SVG mat laga width change nhi ho rha uska */}
      <div className='w-full h-full py-24 bg-contain bg-no-repeat bg-center' style={{backgroundImage:`url(${rectangle})`}}>
        <h3>About</h3>
        <p>I’m Sujeet Kumar, student at Maharaja Surajmal Institute of Technology New Delhi, currently pursuing B.Tech in Information Technology. My field of Interest's are building new Web Technologies and Products and also in areas related to Frontend Design. I’ve also worked on full stack web application which includes MongoDB, ExpressJs, ReactJs, NodeJs, Building APIs, Using APIs. Also willing to learn new technologies.</p>
      </div>      
    </section>
  )
}

export default About