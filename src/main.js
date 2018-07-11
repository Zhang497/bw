// import  Vue  from  'vue' 
// import  App  from  './App'

//   eslint-disable  no-new  
// new  Vue({
// el:  '#app',
// render:  h  =>  h(App)
// })


import Vue from 'vue'
import app from './app' 
import router from './router'

new Vue({
el: '#app',
render: h => h(app), router,
})