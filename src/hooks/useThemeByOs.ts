import { ref, onMounted, onUnmounted } from 'vue'
import { ThemeType, useSystemStore } from '@/store/system.ts'

export type osThemeType = Exclude<ThemeType, 'os'>

export const osThemeMedia: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

export const themeWithOsCb = (): osThemeType => {
  const theme = osThemeMedia.matches ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  return theme
}

export default function useThemeByOs() {
  const systemStore = useSystemStore()

  const osTheme = ref<osThemeType>('light')

  onMounted(() => {
    if (systemStore.theme === 'os') {
      osTheme.value = themeWithOsCb()
      osThemeMedia.addEventListener('change', themeWithOsCb)
    }
    document.documentElement.dataset.theme = systemStore.theme
  })

  onUnmounted(() => {
    if (systemStore.theme === 'os') {
      osThemeMedia.removeEventListener('change', themeWithOsCb)
    }
  })

  return {
    osTheme,
    theme: systemStore.theme
  }
}
