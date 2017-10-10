import React from 'react'

const Wallpaper = (regularDisplay) => {
  return (
    <a href={regularDisplay}>
      <img src={regularDisplay} alt="Loading" className="displayImage" />
    </a>
  )
}

export default Wallpaper
