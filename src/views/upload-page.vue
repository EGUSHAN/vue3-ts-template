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
  {{ uploadSpeedKb }}
</template>

<script lang="js">
export default {
  name: 'uploadPage',
  data() {
    return {
      linkSpeedTimer: null,
      uploadSpeedKb: 0,
      uploadSpeed: 0,
      progressLoad: 0,
      fileSizeMb: 0,
      progressPercent: 0
    }
  },
  mounted() {
    this.onConnectionChange()
  },
  computed: {
    planTimes() {
      const { uploadSpeedKb, fileSizeMb } = this
      if (!fileSizeMb) return ''
      const remainPackSize =
        (fileSizeMb - parseInt((this.progressPercent / 100) * fileSizeMb, 10)) * 1024
      const remainTime = parseInt(remainPackSize / uploadSpeedKb, 10) // 秒
      if (remainTime < 60) {
        return `${remainTime}秒`
      }
      // eslint-disable-next-line camelcase
      const min_total = Math.floor(remainTime / 60) || 0 // 分钟
      const sec = Math.floor(remainTime % 60) || 0 // 余秒
      // eslint-disable-next-line camelcase
      if (min_total < 60) {
        // eslint-disable-next-line camelcase
        return `${min_total}分钟${sec}秒`
      }
      // eslint-disable-next-line camelcase
      const hour_total = Math.floor(min_total / 60) || 0 // 小时数
      // eslint-disable-next-line camelcase
      const min = Math.floor(min_total % 60) || 0 // 余分钟
      // eslint-disable-next-line camelcase
      return `${hour_total}小时${min}分钟${sec}秒`
    }
  },
  methods: {
    handleChange(file) {
      this.fileSizeMb = Number.parseInt(file.size / 1024 / 1024, 10)
    },
    onConnectionChange() {
      this.linkSpeedTimer = setInterval(() => {
        this.uploadSpeedKb = (navigator.connection.downlink * 1024) / 8
        this.uploadSpeed =
          (navigator.connection.downlink * 1024) / 8 > 1024
            ? `${(navigator.connection.downlink * 1024) / 8 / 1024}m/s`
            : `${(navigator.connection.downlink * 1024) / 8}kb/s`
        if (!this.progressLoad) {
          clearInterval(this.linkSpeedTimer)
        }
      }, 1000)
    },
    handleProgress(e) {
      this.progressPercent = e.percent
    },
    handleSuccess() {
      this.progressPercent = 100
    }
  }
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
