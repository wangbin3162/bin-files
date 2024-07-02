import { backgroundImages } from '@/config/background'
import { boxImages } from '@/config/box'
import { loadingImages } from '@/config/loading'
import { decorationImages } from '@/config/decoration'
import { headerImages } from '@/config/header'
import { widgetImages } from '@/config/widget'
import { bgImages ,bgImages1, bgImages2, bannerImages} from '@/config/bg'
import { avatarImages } from '@/config/avatar'
import { insertImages } from '@/config/insert'
import { otherImages } from '@/config/other'
import { animalImages } from '@/config/animals'


export const imageMenu = [
  { index: 'background', icon: 'image-fill', name: '背景图' },
  { index: 'banner', icon: 'image', name: 'banner图' },
  { index: 'box', icon: 'border', name: '边框盒子' },
  { index: 'decoration', icon: 'block', name: '动态装饰器' },
  { index: 'header', icon: 'insertrowabove', name: '头部图片' },
  { index: 'widget', icon: 'hourglass', name: '小部件' },
  { index: 'avatar', icon: 'user', name: '头像图' },
  { index: 'insert', icon: 'linkedin', name: '插画' },
  { index: 'bg', icon: 'image', name: '壁纸图片' },
  { index: 'bg1', icon: 'image', name: '壁纸1' },
  { index: 'bg2', icon: 'image', name: '壁纸2' },
  { index: 'animal', icon: 'image', name: '动物' },
  { index: 'other', icon: 'Report', name: '其他图片' },
]

// 所有图片集合
export const presetImages = {
  background: backgroundImages,
  banner: bannerImages,
  box: boxImages,
  loading: loadingImages,
  decoration: decorationImages,
  header: headerImages,
  widget: widgetImages,
  avatar: avatarImages,
  bg: bgImages,
  bg1: bgImages1,
  bg2: bgImages2,
  animal: animalImages,
  insert: insertImages,
  other: otherImages,
}
