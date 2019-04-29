<template>
    <div id="example">
      <p>{{count}}</p>
      <button @click="increaseCount">
        Click me to increase your life chances
      </button>
      <button @click="decreaseCount">
        Click me to decrease your life chances
      </button>
    </div>
</template>

<script>
    export default {
        name: "example",
        data(){
          return{
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

<style scoped>

</style>
