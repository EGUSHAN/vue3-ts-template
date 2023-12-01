import { defineStore } from 'pinia'
import { osThemeMedia, themeWithOsCb } from '@/hooks/useThemeByOs.ts'

// 主题
export type ThemeType = 'light' | 'dark' | 'os'
// 系统字体大小
export type SizeType = 'small' | 'middle' | 'large' | 'outside'
// 系统语言
export type LanguageType = 'zh-cn' | 'en'

export interface SystemStateInter {
  theme: ThemeType
  size: SizeType
  language: LanguageType
}

export const useSystemStore = defineStore('system', {
  state: (): SystemStateInter => ({
    theme: 'light',
    size: 'middle',
    language: 'zh-cn'
  }),
  actions: {
    /**
     * 设置主题颜色
     * @param type
     */
    setTheme(type: ThemeType) {
      if (type === this.theme) return
      this.theme = type
      if (type === 'os') {
        osThemeMedia.addEventListener('change', themeWithOsCb)
        themeWithOsCb()
        return
      }
      osThemeMedia.removeEventListener('change', themeWithOsCb)
      document.documentElement.dataset.theme = type
    },
    /**
     * 设置全局字体大小
     * @param size
     */
    setSize(size: SizeType) {
      this.size = size
      document.documentElement.dataset.size = size
    },
    /**
     * 设置系统语言
     * @param lang
     */
    setLanguage(lang: LanguageType) {
      this.language = lang
    }
  },
  persist: [
    {
      paths: ['theme', 'size', 'language']
    }
  ]
})
