import { getCDNPath } from '@/env'

const getImgUrl = (name) => getCDNPath(`/avatar/${name}`)

export const avatarImages = [
  { id: 'avatar', name: 'avatar', src: getImgUrl('avatar.jpeg') },
  { id: 'avatar00', name: 'avatar00', src: getImgUrl('avatar00.jpeg') },
  { id: 'avatar01', name: 'avatar01', src: getImgUrl('avatar01.jpeg') },
  { id: 'avatar02', name: 'avatar02', src: getImgUrl('avatar02.jpeg') },
  { id: 'avatar03', name: 'avatar03', src: getImgUrl('avatar03.jpg') },
  { id: 'avatar04', name: 'avatar04', src: getImgUrl('avatar04.jpeg') },
  { id: 'avatar05', name: 'avatar05', src: getImgUrl('avatar05.jpeg') },
  { id: 'avatar06', name: 'avatar06', src: getImgUrl('avatar06.jpeg') },
  { id: 'avatar07', name: 'avatar07', src: getImgUrl('avatar07.jpeg') },
  { id: 'avatar08', name: 'avatar08', src: getImgUrl('avatar08.jpeg') },
  { id: 'avatar09', name: 'avatar09', src: getImgUrl('avatar09.jpeg') },
  { id: 'avatar10', name: 'avatar10', src: getImgUrl('avatar10.jpeg') },
  { id: 'avatar11', name: 'avatar11', src: getImgUrl('avatar11.jpeg') },
  { id: 'avatar12', name: 'avatar12', src: getImgUrl('avatar12.jpeg') },
  { id: 'avatar13', name: 'avatar13', src: getImgUrl('avatar13.jpeg') },
  { id: 'avatar14', name: 'avatar14', src: getImgUrl('avatar14.jpeg') },
]
