// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import ComponentPlugin from '@/components/index.js'
// import Component from '@/views/app/components/index.js'
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI)
Vue.use(ComponentPlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')

let servestatic = require('serve-static')
let path = require('path')
let port = process.env.PORT || 3000;
Vue.use(servestatic(path.join(path.resolve(), 'dist')));
Vue.listen(port, () => {console.log("API server started on "+Vue.get('port'));});
