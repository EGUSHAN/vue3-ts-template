<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue'
// 针对 element-plus 的中英文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
// emitter 组件通信
import emitter from '@/utils/emitter.ts'
// 系统状态管理参数
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

emitter.on('test', type => {
  console.log('Yohoho 我是 mitt 哦', type)
})
// 设置系统的主题
useThemeByOs()

onMounted(() => {
  // 设置系统字体
  document.documentElement.dataset.size = systemStore.size
})
</script>

<style lang="scss" scoped></style>
