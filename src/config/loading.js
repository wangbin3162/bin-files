import { getCDNPath } from '@/env'

const getImgUrl = (name) => getCDNPath(`/loading/${name}`)

export const loadingImages = [
  { id: 'lading1', name: 'lading1', src: getImgUrl('loading1.gif') },
  { id: 'lading2', name: 'lading2', src: getImgUrl('loading2.gif') },
]
