import React from 'react'
import {Typography} from "@mui/material"
import "./YoutubeCard.css"
const YoutubeCard = ({
    url = "www.youtube.com",
    title = "Title Here",
    image
}) => {
  return (
    <div className='youtubeCard'>
      <a href={url} target='_blank'>
        <img src={image} alt="Video" />
        <Typography>{title}</Typography>
      </a>
    </div>
  )
}

export default YoutubeCard
