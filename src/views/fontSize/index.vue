<template>
  <button @click="changeFont('small')">小</button>
  <button @click="changeFont('middle')">中</button>
  <button @click="changeFont('large')">大</button>
  <button @click="changeFont('outside')">特大</button>
</template>

<script lang="ts">
export default {
  name: 'font-size'
}
</script>

<script setup lang="ts">
const changeFont = (type: string) => {
  document.documentElement.dataset.size = type
}
</script>

<style lang="scss" scoped>
button {
  @include useSize {
    font-size: getSize('fontSize');
  }
}
</style>
