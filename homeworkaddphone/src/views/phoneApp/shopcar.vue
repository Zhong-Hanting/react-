<template>
  <div class="superbigbox">

    购物列表
    <div class="bigbox" v-for="(i,a) in list" :key="a">
      <span class="name">{{i.name}}</span>
      <span class="total" style="color:red;">总价:&yen;{{i.count*i.price}}</span>
    
      <div class="button">
        <span @click="count(-1,i.name)">-</span>
        {{i.count}}
        <span @click="count(1,i.name)">+</span>
      </div>
    </div>
      <!-- <span @click="handle()">点我</span> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            // list:[]
        }
    },
    created:{
       
    },
    methods:{
        // handle(){
        //     this.list=(this.$store.getters.shopcarprice)
        //       // console.log(this.$store.getters.shopcarprice)
        // },
        count(count,name){
              this.$store.commit("changecount",{count,name})
            
            }
    },  
    computed:{
      // 获取getter里面的数据
        list(){
           return this.$store.getters.shopcarprice;
       }
    }
};
</script>

<style lang="less" scoped>

.superbigbox{
  padding-bottom:20px;
  background:#eaeaea;
  text-align: center;

}

.bigbox{
  border-bottom: 1px solid #eaeaea;
    display: flex;
    .name{
        flex: 6
    }
    .total{
        flex:3;
    }
     .button{
        flex: 3;
                    span{
                        text-align: center;
                        display: inline-block;
                        font-size:20px;
                        width:29px;
                        height: 29px;
                        border-radius: 50px;
                        background: #87d0fa;
                        color: #fff;
                    }
                }
}
</style>