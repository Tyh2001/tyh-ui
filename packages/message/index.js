import Vue from 'vue'
import Message from './src/message'

const MessageConstructor = Vue.extend(Message)

export default function message (option) {
  const instance = new MessageConstructor({
    data: option
  })
  instance.$mount()
  document.body.appendChild(instance.$el)

  return instance
}
