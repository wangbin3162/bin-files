import { getCDNPath } from '@/env'

const getImgUrl = (name) => getCDNPath(`/other/${name}`)

export const otherImages = [
  { id: '1st', name: '1st', src: getImgUrl('1st.png') },
  { id: '2st', name: '2st', src: getImgUrl('2st.png') },
  { id: '3st', name: '3st', src: getImgUrl('3st.png') },
  { id: '4st', name: '4st', src: getImgUrl('4st.png') },
  { id: '5st', name: '5st', src: getImgUrl('5st.png') },
  { id: '6st', name: '6st', src: getImgUrl('6st.png') },
  { id: '7st', name: '7st', src: getImgUrl('7st.png') },
  { id: 'china', name: 'china', src: getImgUrl('china.png') },
  { id: 'mapPoint', name: 'mapPoint', src: getImgUrl('mapPoint.png') },
]
