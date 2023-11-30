<template>
  <router-view />
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { useSystemStore } from '@/store/system.ts'

export default {
  name: 'App'
}
</script>
<script setup lang="ts">
const systemStore = useSystemStore()

onMounted(() => {
  // 设置系统主题模式
  document.documentElement.dataset.theme = systemStore.theme
})
</script>

<style lang="scss" scoped></style>
