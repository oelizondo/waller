import React, { Component } from 'react'

export default function({nextWallpaper, finishStream, likeWallpaper, resetStream}) {
  return (
    <div className="buttonsection">
      <button onClick={nextWallpaper}> Dismiss </button>
      <button onClick={finishStream}> Finish </button>
      <button onClick={likeWallpaper}> Like </button>
      <button onClick={resetStream}> Reset </button>
    </div>
  )
}
