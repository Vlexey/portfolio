import React from 'react'
import like from '../like.svg'
import './ImgStyles.css'

export const Like = () => {
  return (
    <img 
      src={`${like}`} 
      alt="like"
      className="likeImg"
      width="30"
      />
  )
}
