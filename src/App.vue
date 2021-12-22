<template>
  <div class="main-wrap">
    <div class="left-menu">
      <b-menu
        :uniqueOpened="true"
        :default-active="active"
        class="b-menu-vertical-demo"
        background-color="#111417"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <b-menu-item v-for="item in imageMenu" :key="item.index" :index="item.index">
          <b-icon :name="item.icon"></b-icon>
          <template #title>{{ item.name }}</template>
        </b-menu-item>
      </b-menu>
    </div>
    <div class="right-content">
      <div class="t-right pr-24">
        <b-button type="primary" @click="exportJson">导出当前配置文件</b-button>
      </div>
      <div class="images-wrap">
        <div v-for="item in previewImages" :key="item.id" class="image-item" @click="copyUrl(item)">
          <div class="select-image" :style="getImgStyle(item)"></div>
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div style="height: 500px;" v-if="previewImages.length ===0 ">
        <b-empty>暂无图片资源</b-empty>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { Message, Utils } from 'bin-ui-next'
import { presetImages, imageMenu } from '@/config'

export default {
  name: 'App',
  setup() {
    const active = ref('background')
    const previewImages = computed(() => presetImages[active.value] || [])

    const getImgStyle = (img) => {
      if (active.value === 'avatar') {
        return {
          width: '200px',
          height: '200px',
          opacity: 1,
          'background-image': `url(${img.src})`,
          'background-size': '100% 100%',
          'background-repeat': 'no-repeat',
          ...img.css,
        }
      }
      if (active.value === 'box') {
        return {
          transform: 'translateZ(0px)',
          height: '200px',
          'border-radius': 0,
          'border-style': 'solid',
          'border-width': `1px`,
          background: 'none',
          'border-image': `url(${img.src}) ${img.border.slice} / ${img.border.width} / ${img.border.outset} ${img.border.repeat}`,
        }
      }
      if (active.value === 'other') {
        return {
          width: '100%',
          height: '200px',
          opacity: 1,
          'background-image': `url(${img.src})`,
          'background-size': '100% 100%',
          'background-repeat': 'no-repeat',
          ...img.css,
        }
      }
      return {
        width: '100%',
        height: '200px',
        opacity: 1,
        'background-image': `url(${img.src})`,
        'background-size': '100% 100%',
        'background-repeat': 'no-repeat',
        ...img.css,
      }
    }

    const handleSelect = (index) => {
      active.value = index
    }
    const copyUrl = (img) => {
      console.log(img)
      Utils.util.copy(img.src)
      Message(`已拷贝url: ${img.src}至剪切板.`)
    }
    // 导出全部json
    const exportJson = () => {
      console.log(previewImages.value)
      const link = document.createElement('a')
      const jsonStr = JSON.stringify(previewImages.value, null, 2) //  把 JSON 对象转换为字符串
      const blob = new Blob([jsonStr]) //  创建 blob 对象
      link.setAttribute('href', URL.createObjectURL(blob))//  创建一个 URL 对象并传给 a 的 href
      link.setAttribute('download', 'config.json')// 设置下载的默认文件名
      link.setAttribute('id', 'b-link-temp')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(document.getElementById('b-link-temp'))
    }

    return {
      imageMenu,
      active,
      previewImages,
      handleSelect,
      copyUrl,
      getImgStyle,
      exportJson,
    }
  },
}
</script>
