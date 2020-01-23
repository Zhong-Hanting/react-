<template>
  <div id="app">
     
    <!-- <div>
       <router-link to="/home">选项卡</router-link> ||| 
       <router-link to="/fight">斗地主</router-link> 
     </div>
   <div>
      <router-view></router-view>
   </div> -->
     <index/>
  </div>
</template>
<script>
import index from "../src/views/手机端项目/首页"
export default {
   data(){
      return{

      }
   },
   components: {
      index
  },
  
}
</script>

<style lang="less">
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
h1,h2,h3,h4,h5,h6,p,ul{
  margin: 0;
  padding: 0;
}
#app{
  height: 100%;
}
</style>
