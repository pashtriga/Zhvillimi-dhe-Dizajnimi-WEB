import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuelidate from 'vuelidate'
import store from './store'
import Toasted from 'vue-toasted';
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(vuelidate)
Vue.use(Toasted)

Vue.filter('formatDate',function(value,formatType='LL'){
  if(!value) return ''

  return moment(value).format(formatType)
})

new Vue({
  router,
  vuelidate,
  store,
  render: h => h(App),
}).$mount('#app')


