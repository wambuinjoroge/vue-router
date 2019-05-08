<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <!--<span style="color: cadetblue"><slot name="subtitle">Be Aware</slot></span>-->
    </div>
    <br>
    <div>
      <slot></slot>
      <!--<span class="box"></span>-->
    </div>
  </div>
</template>

<script>
    export default {
      props:['quote'],
      name: "Quote",
      data(){
        return{
          title: "Quotes Added"
        }
      }
    }
</script>

<style scoped>
  p{
    color: blueviolet;
  }
  .title{
    font-style: italic;
  }
  .box{
    width: 320px;
    padding: 10px;
    border: 2px solid gray;
    margin: 0;
  }
</style>
