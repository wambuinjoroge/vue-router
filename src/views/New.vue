<template>
 <div>
   <p>I am new here!</p>
   <button @click="count++">Click to increase the number.</button>
   <p>{{count}}</p>
 </div>
</template>

<script>
    export default {
        name: "New",
        data(){
          return{
            count:0
          }
        },
      destroyed() {
        console.log('Destroyed')
      },
      deactivated() {
          console.log("Deactivated")
      }
    }
</script>

<style scoped>

</style>
