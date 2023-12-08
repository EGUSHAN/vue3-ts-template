<template>
  <button @click="changeFont('small')">小</button>
  <button @click="changeFont('middle')">中</button>
  <button @click="changeFont('large')">大</button>
  <button @click="changeFont('outside')">特大</button>
</template>

<script lang="ts">
import emitter from '@/utils/emitter.ts'
import { useSystemStore, SizeType } from '@/store/system.ts'

export default {
  name: 'font-size'
}
</script>

<script setup lang="ts">
const systemStore = useSystemStore()

const changeFont = (type: SizeType) => {
  systemStore.setSize(type)
  emitter.emit('test', '')
}
</script>

<style lang="scss" scoped>
button {
  @include useSize {
    font-size: getSize('fontSize');
  }
}
</style>
