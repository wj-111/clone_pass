import Vue from 'vue'
import App from './App'

import Vant from 'vant';



Vue.use(Vant);				//图标库



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
