import Vue from 'vue'
import Tips from './tips'

const TipsConstructor = Vue.extend(Tips)

export default function tips (option) {
  const instance = new TipsConstructor({
    data: option
  })
  instance.$mount()
  document.body.appendChild(instance.$el)

  return instance
}
