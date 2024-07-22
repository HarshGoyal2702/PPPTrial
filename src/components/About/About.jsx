import React from 'react'
import "./About.css"
import {Typography} from "@mui/material"
const About = () => {
  return (
    <div className='about'>
      <div className="aboutContainer">
      <Typography>This is the Sample Quote</Typography>
      </div>
      <div className="aboutContainer2">
      <div>
        <img src="" alt="Harsh"  className='aboutAvatar'/>
        <Typography variant='h4' style={{margin:"1vmax 0",color:"black"}}>HARSH</Typography>
        <Typography>I am Full Stack Developer</Typography>
        <Typography style={{margin:"1vmax 0"}}>I am a Leaner</Typography>
      </div>
      <div>
        <Typography style={{
            wordSpacing:"5px",
            lineHeight:"50px",
            letterSpacing:"5px",
            textAlign:"right",
        }}>
            This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis consequuntur impedit qui beatae optio dicta, similique temporibus soluta distinctio molestias.
        </Typography>
      </div>
      </div>
    </div>
  )
}

export default About
