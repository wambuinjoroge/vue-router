<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>{{count}}</p>
    <button @click="increaseCount" class="btn-primary">
      Click me to increase your life chances
    </button>
    <button @click="decreaseCount" class="btn-danger">
      Click me to decrease your life chances
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count:0,
    }
  },
  methods:{
    increaseCount(){
      return this.count ++
    } ,
    decreaseCount(){
      return this.count --
    }
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
