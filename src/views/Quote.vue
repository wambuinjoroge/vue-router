<template>
  <div>
    <!--<p>{{ quote }}</p>-->
    <div class="title">
      <slot name="title"></slot>
      <span style="color: cadetblue"><slot name="subtitle">Be Aware</slot></span>
    </div>
    <br>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
      props:['quote'],
      name: "Quote"
    }
</script>

<style scoped>
  p{
    color: blueviolet;
  }
  .title{
    font-style: italic;
  }
</style>
