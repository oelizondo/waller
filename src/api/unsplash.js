import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId: '161331331b029c92fbc4cb5faaff0156af5a4532f39750d50f088fb09d287cf1',
  secret: '3ac18c5b35f8984290274751ce423c0d7aca2ef8088617e9789a47dd9f842323',

})

export async function getPhotos (page) {
  const photos = await unsplash.photos.listPhotos(page, 30, "latest")
  .then(res => res.json())
  .then(json => json)
  .catch(e => e)
  return photos
}
