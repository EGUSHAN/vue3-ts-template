<template>
  <svg-icon name="center-view" color="red" />
  <svg-icon name="fullscreen" color="red"></svg-icon>
  <svg-icon name="full-view" color="red"></svg-icon>
  <svg-icon name="history" color="red"></svg-icon>
  <svg-icon name="left-view" color="red"></svg-icon>
  <router-view></router-view>
  <div class="box">aaa</div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { cloneDeep } from 'lodash'

console.log(dayjs().format('YYYY-MM-DD'))
const pbj = {}
console.log(cloneDeep(pbj))
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;

  @include useTheme {
    background-color: getTheme('bgColor');
    color: getTheme('textColor');
  }

  @include useSize {
    font-size: getSize('fontSize');
  }
}
</style>
