import Vue from 'vue';
import VueRouter from 'vue-router'
import Example from "./views/Example";


Vue.use(VueRouter);

export const router = new VueRouter({
  routes:[
    {
      path:'/example',component:Example
    }
  ]
});



