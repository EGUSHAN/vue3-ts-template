<template>
  <el-button @click="changeTheme('light')">light</el-button>
  <el-button @click="changeTheme('dark')">dark</el-button>
  <el-button @click="changeTheme('os')">跟随系统</el-button>
  {{ systemStore.theme }}

  <div class="box"></div>
</template>

<script lang="ts">
import { useSystemStore, ThemeType } from '@/store/system.ts'

export default {
  name: 'theme-change'
}
</script>

<script setup lang="ts">
const systemStore = useSystemStore()

const changeTheme = (theme: ThemeType) => {
  systemStore.setTheme(theme)
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  @include useTheme {
    background: getTheme('bgColor');
  }
}
</style>
