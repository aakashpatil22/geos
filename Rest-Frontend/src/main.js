import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

// Visit https://developers.google.com/maps/documentation/javascript/get-api-key
// to request a key

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA8RwRCpG7ajbR-pl0D58oUGzi83c6RCYk',
    libraries: 'places'
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
