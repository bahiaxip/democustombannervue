import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
//no necesario
//import HomeHeader from './components/HomeHeader.vue';
import Demo from './components/Demo.vue';
import Mini from './components/Mini.vue';
import Vertical from './components/Vertical.vue';
import Flex from './components/Flex.vue';
import DocsCBV from './components/Docs.vue';
import CustomBannerVue from 'custom-banner-vue';

//importar globalmente
/*
import CustomBannerVue from 'custom-banner-vue'
Vue.use(CustomBannerVue)
*/

Vue.config.productionTip = false
//para instalar vue router especificar la versión 3: npm i --save vue-router@3
Vue.use(VueRouter).use(CustomBannerVue);
Vue.prototype.$footer = 'footer';
const routes = [
    {path:"/",redirect:'demo'},
    //no necesario  
    //{path:'/home',component:HomeHeader,name:'home'},
    {path:'/demo',component:Demo,name:'demo'},
    {path:'/mini',component:Mini,name:'mini'},
    {path:'/vertical',component:Vertical,name:'vertical'},
    {path: '/flex', component: Flex,name:'flex'},
    {path: '/docs',component:DocsCBV,name:'docs'},
];
const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
