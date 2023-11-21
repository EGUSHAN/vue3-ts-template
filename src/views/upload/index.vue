<template>
  <div class="box">你好</div>
  {{ planTimes }}
  <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-progress="handleProgress"
    :on-change="handleChange"
    :on-success="handleSuccess"
    :on-error="handleSuccess"
  >
    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </template>
  </el-upload>
  {{ speedInfoRef }} {{ leftTimeRef }} {{ progressBarRef }}
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'uploadPage'
}
</script>

<script setup>
const startTimeRef = ref(Date.now())

const handleChange = () => {
  startTimeRef.value = Date.now()
}

const speedInfoRef = ref('')
const leftTimeRef = ref('')
const progressBarRef = ref('')

const handleProgress = event => {
  const uploaded = event.loaded
  const { total } = event

  // 计算上传进度百分比
  progressBarRef.value = event.percent

  // 计算上传速度
  const deltaTime = (Date.now() - startTimeRef.value) / 1000 // 单位: 秒
  startTimeRef.value = Date.now() // 单位：秒 下次开始时间
  const speed = uploaded / deltaTime / (1024 * 1024) // 单位: MB/s

  speedInfoRef.value = `${speed.toFixed(2)} MB/s`

  // 计算上传剩余时间
  const leftTime = (total - uploaded) / (speed * 1024 * 1024) // 单位: 秒
  leftTimeRef.value = `${leftTime.toFixed(0)} 秒`
}

const handleSuccess = () => {
  speedInfoRef.value = `0 MB/s`
  leftTimeRef.value = `0 秒`
  progressBarRef.value = `100`
}
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
