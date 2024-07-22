import React from 'react'
import {Typography} from "@mui/material"
import {Link} from "react-router-dom"
import {BsYoutube,BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs"
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
     <div>
     <Typography variant='h5'>About Me</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia debitis ipsa nam odio possimus ab saepe recusandae. Rerum, consectetur.
      </Typography>
      <Link to="/contact" className="footerContactBtn">
        <Typography>Contact Us</Typography>
      </Link>
     </div>
     <div>
        <Typography variant='h'>Social Media</Typography>
        <a href="https://github.com" target='black'>
            <BsGithub/>
        </a>
        <a href="https://youtube.com" target='black'>
            <BsYoutube/>
        </a>
        <a href="https://instagram.com" target='black'>
            <BsInstagram/>
        </a>
        <a href="https://linkedin.com" target='black'>
            <BsLinkedin/>
        </a>
        <a href="https://github.com" target='black'>
            <BsGithub/>
        </a>
     </div>
    </div>
  )
}

export default Footer
