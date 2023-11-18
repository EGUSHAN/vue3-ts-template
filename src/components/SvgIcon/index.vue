<template>
  <svg aria-hidden="true" class="svg-icon" :width="props.size" :height="props.size">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface PropsInter {
  prefix: string
  color: string
  name: string
  size: string
}

const props = withDefaults(defineProps<PropsInter>(), {
  prefix: 'icon',
  color: '#333',
  size: '1em',
  name: ''
})

const symbolId = computed<string>(() => `#${props.prefix}-${props.name}`)
</script>

<script lang="ts">
export default {
  name: 'svg-icon'
}
</script>
