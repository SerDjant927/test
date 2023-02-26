import "./styles/normalize.css";
import "./styles/fonts.css";
import "./styles/style.less";
import Vue from 'vue'

import App from './App.vue'
Vue.config.productionTip = false

new Vue({

  render: h => h(App),
}).$mount('#app')

