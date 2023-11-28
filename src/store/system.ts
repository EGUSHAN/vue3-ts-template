import { defineStore } from 'pinia'

// 主题
export type ThemeProp = 'light' | 'dark'

export interface SystemStateInter {
  theme: ThemeProp
}

export const useSystemStore = defineStore('system', {
  state: (): SystemStateInter => ({
    theme: 'light'
  }),
  actions: {
    setTheme(type: ThemeProp) {
      this.theme = type
    }
  }
})
