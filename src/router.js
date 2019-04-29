import Vue from 'vue';
import VueRouter from 'vue-router'

import App from "./App";
import Example from "./views/Example";

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Wrapper from './layouts/Wrapper'

Vue.use(VueRouter);

export const router = new VueRouter({
  routes:[
    {
      path:'/', component:Wrapper,
      children:[
        {path:'/test',
          components:{
            default:App,
            header: Header,
            footer:Footer
          }
        }
      ]
    }
  ]
});



