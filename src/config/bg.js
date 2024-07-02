import { getCDNPath } from '@/env'

const getImgUrl = (name) => getCDNPath(`/bg/${name}`)

export const bgImages = [
  { id: 'bg0', name: '背景0', src: getImgUrl('bg0.jpg') },
  { id: 'bg1', name: '背景1', src: getImgUrl('bg1.jpg') },
  { id: 'bg2', name: '背景2', src: getImgUrl('bg2.jpg') },
  { id: 'bg3', name: '背景3', src: getImgUrl('bg3.jpg') },
  { id: 'bg4', name: '背景4', src: getImgUrl('bg4.jpg') },
  { id: 'bg5', name: '背景5', src: getImgUrl('bg5.jpg') },
  { id: 'bg6', name: '背景6', src: getImgUrl('bg6.jpg') },
  { id: 'bg7', name: '背景7', src: getImgUrl('bg7.jpg') },
  { id: 'bg8', name: '背景8', src: getImgUrl('bg8.jpg') },
]

export const bannerImages=[]

for(let i = 0 ; i<5;i++) {
  let name =  `${i}.jpeg`
  bannerImages.push({id:`bg${i}`,name:`背景${i}`,src:getCDNPath(`/banner/banner${name}`)})
}