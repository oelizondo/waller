import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId: process.env.UNSPLASH_APPLICATION_ID,
  secret: process.env.UNSPLASH_SECRET
})
const perPage = 30
const type = "lastest"

export function getPhotos (page) {
  return new Promise((resolve, reject) => {
    unsplash
      .photos
      .listPhotos(page, perPage, type)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(e => reject(e))
  })
}
