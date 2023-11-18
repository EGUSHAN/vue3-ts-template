<template>
  <router-view></router-view>
  <div class="box">aaa</div>
</template>

<script setup lang="ts"></script>

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
