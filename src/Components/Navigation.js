import React, { Component } from 'react'

class Navigation extends Component {
  render () {
    return (
      <div className="buttonsection">
        <button onClick={this.props.nextWallpaper}> Dismiss </button>
        <button onClick={this.props.finishStream}> Finish </button>
        <button onClick={this.props.likeWallpaper}> Like </button>
      </div>
    )
  }
}

export default Navigation
