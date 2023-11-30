<template>
  <ul id="dragId">
    <li v-for="item in listRef" :key="item">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import Sortable from 'sortablejs'

export default {
  name: 'sortablejs-test'
}
</script>

<script setup lang="ts">
const listRef = ref<number[]>([1, 2, 3, 4, 5])

onMounted(() => {
  const el = document.getElementById('dragId') as HTMLElement
  Sortable.create(el, {
    animation: 180,
    onEnd: ({ oldIndex, newIndex }) => {
      const currRow = listRef.value.splice(oldIndex as number, 1)[0]
      listRef.value.splice(newIndex as number, 0, currRow)
    }
  })
})
</script>

<style scoped></style>
