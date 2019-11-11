// js modules
import Vue from 'vue';
import VueScrollmagic from 'vue-scrollmagic';
import store from './_js/store/Store';
import App from './App.vue';
// styles
import './_css/style.css';
import vHide from './_js/directives/vHide';


// configurate vue
Vue.config.productionTip = false;
Vue.use(VueScrollmagic);
Vue.directive('hide', vHide);
new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
