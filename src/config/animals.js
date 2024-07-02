import { getCDNPath } from '@/env'

const getImgUrl = (name) => getCDNPath(`/animals/${name}`)

export const animalImages = [
  {id:'bg00',name:'背景00',src:getImgUrl('00.jpg')},
  {id:'bg01',name:'背景01',src:getImgUrl('01.jpg')},
  {id:'bg02',name:'背景02',src:getImgUrl('02.jpg')},
  {id:'bg03',name:'背景03',src:getImgUrl('03.jpg')},
  {id:'bg04',name:'背景04',src:getImgUrl('04.jpg')},
  {id:'bg05',name:'背景05',src:getImgUrl('05.jpg')},
  {id:'bg06',name:'背景06',src:getImgUrl('06.jpg')},
  {id:'bg07',name:'背景07',src:getImgUrl('07.jpg')},
  {id:'bg08',name:'背景08',src:getImgUrl('08.jpg')},
  {id:'bg09',name:'背景09',src:getImgUrl('09.jpg')},
]
