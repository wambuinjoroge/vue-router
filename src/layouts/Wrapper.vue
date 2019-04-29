<template>
   <div>
     <div>
       <router-view name="header"></router-view>
     </div>
     <div>
       <router-view/>
     </div>
     <div>
       <router-view name="footer"></router-view>
     </div>
   </div>
</template>

<script>
    export default {
        name: "wrapper"
    }
</script>

<style scoped>

</style>
