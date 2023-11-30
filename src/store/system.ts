import { defineStore } from 'pinia'

// 主题
export type ThemeType = 'light' | 'dark'
export type SizeType = 'small' | 'middle' | 'large' | 'outside'

export interface SystemStateInter {
  theme: ThemeProp
  size: SizeType
}

export const useSystemStore = defineStore('system', {
  state: (): SystemStateInter => ({
    theme: 'light',
    size: 'middle'
  }),
  actions: {
    setTheme(type: ThemeType) {
      this.theme = type
      document.documentElement.dataset.theme = type
    },
    setSize(size: SizeType) {
      this.size = size
      document.documentElement.dataset.size = size
    }
  },
  persist: [
    {
      paths: ['theme', 'size']
    }
  ]
})
