import React, { Component } from 'react'
import { getPhotos } from '../api/unsplash'
import Wallpaper from './Wallpaper'
import Package from './Package'
import Navigation from './Navigation'
import Finished from './Finished'

class Renderer extends Component {
  constructor() {
    super()
    this.state = {
      wallpapers: [],
      chosenWallpaper: {
        id: '',
        urls: {
          regular: ''
        },
        links: {
          download_location: ''
        }
      },
      likedWallpapers: [],
      length: 0,
      iterator: 1,
      finished: false
    }
    this.nextWallpaper = this.nextWallpaper.bind(this)
    this.likeWallpaper = this.likeWallpaper.bind(this)
    this.finishStream  = this.finishStream.bind(this)
    this.resetStream   = this.resetStream.bind(this)
  }

  async fetchWallpaperBatch(page) {
    const wallpapers = await getPhotos(page)
    const wp = wallpapers.pop()
    this.setState((prevState, props) => {
      return {
        wallpapers: wallpapers,
        chosenWallpaper: wp,
        length: wallpapers.length,
        iterator: prevState.iterator + 1
      }
    })
  }

  nextWallpaper() {
    const page = this.state.iterator
    if (!this.state.length)
      return this.fetchWallpaperBatch(page)

    this.setState((prevState, props) => {
      const wp = prevState.wallpapers.pop()
      return {
        wallpapers: prevState.wallpapers,
        chosenWallpaper: wp,
        length: prevState.wallpapers.length
      }
    })
  }

  likeWallpaper() {
    this.nextWallpaper()
    const wallpaper = this.state.chosenWallpaper
    const likedWallpapers = this.state.likedWallpapers
    likedWallpapers.push(wallpaper.urls.raw)
    this.setState({likedWallpapers: likedWallpapers})
  }

  finishStream() {
    this.setState({finished: true})
  }

  resetStream() {
    this.setState({likedWallpapers: []})
    this.fetchWallpaperBatch(this.state.iterator)
  }

  async componentDidMount() {
    const page = this.state.iterator
    await this.fetchWallpaperBatch(page)
  }

  render() {
    const wallpaper = this.state.chosenWallpaper
    const regular = wallpaper.urls.regular
    const component = this.state.finished ? Package(this.state.likedWallpapers) : Wallpaper(regular)
    const navigation = this.state.finished ?
    Finished(this.state.likedWallpapers) :
    <Navigation nextWallpaper={this.nextWallpaper} likeWallpaper={this.likeWallpaper} finishStream={this.finishStream} resetStream={this.resetStream} />

    return (
      <div className="renderer">
        <div className="wallpaper">
          { component }
        </div>
        <div>
          { navigation }
        </div>
      </div>
    )
  }
}

export default Renderer
