<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useSystemStore } from '@/store/system.ts'

export default {
  name: 'App'
}
</script>
<script setup lang="ts">
const systemStore = useSystemStore()

// 当前系统的语言
const locale = computed(() => (systemStore.language === 'zh-cn' ? zhCn : en))

onMounted(() => {
  // 设置系统主题模式
  document.documentElement.dataset.theme = systemStore.theme
  // 设置系统字体
  document.documentElement.dataset.size = systemStore.size
})
</script>

<style lang="scss" scoped></style>
