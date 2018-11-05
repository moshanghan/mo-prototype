import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// console.log(Vue);
// var vm = new Vue()
// console.log(Vue.prototype);
// console.log(vm.__proto__===Vue.prototype)
window.abc = "123"
Vue.config.productionTip = false
Vue.prototype.myName = "陌上寒"
new Vue({
  router,
  store,
  data() {
    return {
      website: "https://www.qdtalk.com",
    }
  },
  render: h => h(App)
}).$mount('#app')