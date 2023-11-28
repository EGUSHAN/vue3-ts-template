<template>
  <button @click="changeTheme">切换主题</button>
  {{ systemStore.theme }}
  <button @click="changeThemeWithOs">跟随系统</button>
  <button @click="changeFont('small')">小</button>
  <button @click="changeFont('middle')">中</button>
  <button @click="changeFont('large')">大</button>
  <button @click="changeFont('outside')">特大</button>
</template>

<script lang="ts">
import { onUnmounted } from 'vue'
import { useSystemStore } from '@/store/system.ts'

export default {
  name: 'main-layout'
}
</script>

<script lang="ts" setup>
const systemStore = useSystemStore()

// 获取当前系统的媒体查询列表
const os = window.matchMedia('(prefers-color-scheme: dark)')

const changeTheme = () => {
  const theme = systemStore.theme === 'light' ? 'dark' : 'light'
  systemStore.setTheme(theme)
  document.documentElement.setAttribute('data-theme', theme)
  // 不需要通过监听系统主题色变化修改主题色
  os.removeEventListener('change', modifyThemeByOs)
}

// 切换主题
const changeThemeWithOs = () => {
  // 修改主题
  modifyThemeByOs()
  // 解绑change事件时，防止多次触发
  os.removeEventListener('change', modifyThemeByOs)
  // 监听change事件，系统主题变化同步修改
  os.addEventListener('change', modifyThemeByOs)
}

const modifyThemeByOs = () => {
  const theme = os.matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  systemStore.setTheme(theme)
}

onUnmounted(() => {
  os.removeEventListener('change', modifyThemeByOs)
})

// 修改全局字体大小
const changeFont = (type: string) => {
  document.documentElement.setAttribute('data-size', type)
}
</script>
