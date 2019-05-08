<template>
  <div id="app">
    <!--<h1>{{ msg }}</h1>-->
    <!--<app-example :quote="'A wonderful quote'"></app-example>-->
    <br>
    <app-quote>
      <h2 slot="title">{{title}}</h2>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%"> 25%</div>
      </div>
    </app-quote>
    <!--<button @click="selectedComponent = 'appAuthor'" class="btn btn">Click to select Author</button>-->
    <!--<button @click="selectedComponent = 'appQuote' " class="btn btn">Click to select Quote</button>-->
    <!--<button @click="selectedComponent = 'appNew' " class="btn btn">Click to select new quote</button>-->

    <!--<keep-alive>-->
      <!--<component :is="selectedComponent">-->
        <!--<p>default component</p>-->
      <!--</component>-->
    <!--</keep-alive>-->
  </div>
</template>

<script>
  import Example from './views/Example'
  import Quote from "./views/Quote";
  import Author from "./views/Author";
  import New from "./views/New";

  export default {
    components:{
      appExample : Example,
      appQuote: Quote,
      appAuthor: Author,
      appNew : New
    },
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        count:0,
        title:'Quotes Added',
        selectedComponent:'AppQuote'
      }
    },
    methods:{
      increaseCount(){
        return this.count ++
      } ,
      decreaseCount(){
        return this.count --
      },
      // selectedComponent(){
      //   return this.selected
      // }
    }
}
</script>

<style>
#app {
  font-family: 'Manjari Bold', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.box{
  width: 320px;
  padding: 10px;
  border: 2px solid gray;
  margin: 0;
}
</style>
<!--<div class="row justify-content-md-center">-->
<!--<div class="col-md-6">-->
<!--<div class="card">-->
<!--<div class="card-header">-->
<!--<h2 slot="title">{{title}}</h2>-->
<!--</div>-->
<!--<div class="card-body">-->
<!--<p>A wonderful quote</p>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</app-quote>/-->
<!--<app-author></app-author>-->
<!--<app-new></app-new>-->
<!--<app-quote :quote="'A wonderful quote'"></app-quote>-->
