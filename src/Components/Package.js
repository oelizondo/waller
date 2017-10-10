const Package = (wallpapers) => {
  return (
    wallpapers.forEach((wallpaper) => {
      const e = document.createElement('a')
      e.href = wallpaper
      e.download = wallpaper
      document.body.appendChild(e)
      e.click()
    })
  )
}

export default Package
