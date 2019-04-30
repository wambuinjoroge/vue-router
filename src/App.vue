<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-example :quote="'A wonderful quote'"></app-example>
    <br>
    <app-quote>
      <h2 slot="title">{{title}}</h2>
      <p>A wonderful quote</p>
    </app-quote>
    <button @click="selectedComponent = 'appAuthor'" class="btn btn">Click to select Author</button>
    <button @click="selectedComponent = 'appQuote' " class="btn btn">Click to select Quote</button>
    <button @click="selectedComponent = 'appNew' " class="btn btn">Click to select new quote</button>
      <!--<app-author></app-author>-->
      <!--<app-new></app-new>-->
    <!--{{ selectedComponent }}-->
    <component :is="selectedComponent">
      <p>default component</p>
    </component>
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
        title:'Quote',
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
