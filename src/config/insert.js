import { getCDNPath } from '@/env'

const getImgUrl = (name) => getCDNPath(`/insert/${name}`)

export const insertImages = [
  { id: 'auto', name: 'auto', src: getImgUrl('auto.png') },
  { id: 'book', name: 'book', src: getImgUrl('book.png') },
  { id: 'cloud', name: 'cloud', src: getImgUrl('cloud.png') },
  { id: 'dashboard', name: 'dashboard', src: getImgUrl('dashboard.png') },
  { id: 'data', name: 'data', src: getImgUrl('data.png') },
  { id: 'data2', name: 'data2', src: getImgUrl('data2.png') },
  { id: 'gongping', name: 'gongping', src: getImgUrl('gongping.png') },
  { id: 'jiaofu', name: 'jiaofu', src: getImgUrl('jiaofu.png') },
  { id: 'jiaoyou', name: 'jiaoyou', src: getImgUrl('jiaoyou.png') },
  { id: 'kancha', name: 'kancha', src: getImgUrl('kancha.png') },
  { id: 'keshihua', name: 'keshihua', src: getImgUrl('keshihua.png') },
  { id: 'liulan', name: 'liulan', src: getImgUrl('liulan.png') },
  { id: 'map', name: 'map', src: getImgUrl('map.png') },
  { id: 'only', name: 'only', src: getImgUrl('only.png') },
  { id: 'qingzhu', name: 'qingzhu', src: getImgUrl('qingzhu.png') },
  { id: 'safe', name: 'safe', src: getImgUrl('safe.png') },
  { id: 'search', name: 'search', src: getImgUrl('search.png') },
  { id: 'tongji', name: 'tongji', src: getImgUrl('tongji.png') },
  { id: 'work', name: 'work', src: getImgUrl('work.png') },
  { id: 'workspace', name: 'workspace', src: getImgUrl('workspace.png') },
  { id: 'xiezuo', name: 'xiezuo', src: getImgUrl('xiezuo.png') },
  { id: 'xuexi', name: 'xuexi', src: getImgUrl('xuexi.png') },
]
