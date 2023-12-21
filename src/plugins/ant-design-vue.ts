import { Button, Steps } from 'ant-design-vue'
import { App } from 'vue'

const antComponents = [Button, Steps]

const install = (vue: App<Element>) => {
  antComponents.forEach(component => {
    vue.component(component.name, component)
  })
}

export default {
  install
}
