<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import emitter from '@/utils/emitter.ts'
import { useSystemStore } from '@/store/system.ts'
import useThemeByOs from '@/hooks/useThemeByOs.ts'

export default {
  name: 'App'
}
</script>
<script setup lang="ts">
const systemStore = useSystemStore()

// 当前系统的语言
const locale = computed(() => (systemStore.language === 'zh-cn' ? zhCn : en))

// 设置系统的主题
useThemeByOs()

onMounted(() => {
  // 设置系统字体
  document.documentElement.dataset.size = systemStore.size
  emitter.on('test', type => {
    console.log('Yohoho 我是 mitt 哦', type)
  })
})
</script>

<style lang="scss" scoped></style>
