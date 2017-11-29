import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$uuid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

new Vue({
  el: '#app',
  render: h => h(App)
})
