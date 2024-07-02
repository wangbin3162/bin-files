import { getCDNPath } from '@/env'

const getImgUrl = (name) => getCDNPath(`/animals/${name}`)

export const animalImages = []

for(let i = 0 ; i<10;i++) {
  let name = i<10 ? `0${i}.jpg`: `${i}.jpg`
  animalImages.push({id:`bg${i}`,name:`背景${i}`,src:getImgUrl(name)})
}
