<template>
  <div id="box">
    <div class="header">
      <div class="top">
        <div class="img">
          <img :src="data.avatar"/>
        </div>
        <div class="name">
          <h4 style="color:red;margin-right:5px;">品牌</h4>
          <h4>{{data.name}}</h4>
          <p>{{data.description}}/ {{data.deliveryTime}}分钟</p>
          <p>
            <span style="color:red;">满</span> {{data.supports[0].description}}
          </p>
        </div>
        <div class="num">
          <div>5个 ></div>
        </div>
      </div>
      <div class="hfotter">
        <p>公告</p>
        <span>{{data.bulletin}}</span>
      </div>
       <nav>      
        <router-link to="/goods" :class="{choice:num==1,}"><span @click="handleclick(1)">商品</span></router-link>
       <router-link to="/shops" :class="{choice:num==2,}"><span @click="handleclick(2)">评价</span></router-link>
       <router-link to="/evaluate" :class="{choice:num==3,}"><span @click="handleclick(3)">商家</span></router-link>
      </nav>
    </div>
    <!-- 身体 -->
    <div class="main">
      
      <div class="mainbox">
         <router-view/>
      </div>          
    </div>
    <transition name="slide-fade">   <!-- //加的better-scroll动画属性   特定的transition标签 和name  -->
       <div class="shopcar" v-show="show">
        <shopcar/>
    </div>
    </transition>
    
    <!-- 底部 -->
    <div class="fotter" @click="show=!show">
      
        <div class="fleft" >
            <div class="car">
              
                <div class="photo"><img src="cart.jpg"></div>
                <h3 style="color:red;">&yen;{{gettotalmoney}}</h3>
            
                
            </div>
            <p>另需配送费4元</p>
        </div>
        <div class="fright" :class="{photo:!bili,nothing:bili}">
            &yen;20起送
        </div>
    </div>
   
  </div>
</template>

<script>
import shopcar from "../phoneApp/shopcar"
import { seller} from "../../api/axios"
export default {
  data(){
    return{
      show:false,
        num:1 ,  //初始值  
        data:{}, 
             
    }
  },
  components:{
    shopcar
  },
  created(){
      seller().then((res)=>{
        this.data=res.data.data
        // console.log(this.data);
        
      })

       
  },
  methods:{
    handleclick(val){
        this.num=val;
    }
    
  },
  computed:{
    bili(){
    if(this.$store.getters.shopcarprice.length>0){
      let falg=false
      return falg
    } else{
      let falg=true
      return falg
    }
       
      
    },
    gettotalmoney(){
      let money=0   //定义一个变量当总价
      //  循环遍历getters里面 满足条件的arr数组
      for(let obj of this.$store.getters.shopcarprice){
        
        money+=obj.count*obj.price
      }
      return money
    }
       
    },
    updated(){
      // console.log( this.$store.getters.shopcarprice )
    }
};
</script>

<style lang="less" scoped>
.photo{
  background-color: #fff !important;
}
.nothing{
  background-color: #0d98e9;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(200px);
  opacity: 0;
}


.shopcar{
  width: 100%;
  position: fixed;
  bottom: 50px;
}
a{
  text-decoration: none;
  color: #87d0fa;
}
.choice{
  color: red;
  font-weight:600;
}

#box {
  height: 100%; 
  display: flex;
  flex-direction: column;
  .header {
    height: 200px;
    background:url('../../../public/head-bg.jpg');
    display: flex;
    color: #fff;
    flex-direction: column;
    .top {
      height: 150px;
      display: flex;
      justify-content: space-around;
      padding: 15px 5px;
      .img {
        width: 91px;
        img {
          width:100%;
        }
      }
      .name {
        padding-left: 10px;
        height: 91px;
        flex: 7;
        line-height: 31px;
        h4 {
          display: inline-block;
        }
        p {
          font-size: 14px;
        }
      }
      .num {
        text-align: center;
        height: 91px;
        flex: 2;
        font-size: 12px;
        display: flex;
        flex-direction: column-reverse;

        div {
          border-radius: 10px;
          width: 100%;
          height: 30px;
          line-height: 28px;
        }
      }
    }
    .hfotter {
      font-size: 12px;
      margin-bottom:5px;
    height: 18px;
      display: flex;
      justify-content: space-around;
      p {
        display: inline-block;
        width: 30px;
        height: 16px;
        background: #fff;
        color: #000;
        font-weight: 600;
        text-align: center;
        
      }
      span{
          display: inline-block;
          width: 270px;
          height: 16px;
          overflow: hidden;
        }

    }
      nav {
      border-bottom: 1px solid #ccc;
      height:36px;
      background: #fff;
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      line-height: 35px;
    }
  }

  // 中间
  .main {
    flex:2;
    background: #fff;
    display: flex;
    flex-direction: column;
    .mainbox{
      flex: 1;
    }
    
  }

  // 底部
  .fotter {
    position: fixed;
    bottom: 0;
    height: 50px;
    display: flex;
    text-align: center;
    width: 100%;
    .fleft{
        flex:8;
        background:#0d98e9; 
        display: flex;
        height:100%;
        
        .car{
          position: relative;
            flex: 6;
            line-height:17px; 
            display: flex;
            justify-content: space-around;
            .photo{
              position:absolute;
              left: 20px;
              top:-20px;
              background: #87d0fa;
                   width: 60px;
                   height: 60px;
                   border-radius: 50%;       
                img{
                    width: 100%;
                }
            }
            h3{
                display: inline-block;
              line-height: 45px;
              margin-left:75px;
                
            }
        }
        p{
            display:inline-block;
            flex: 6;
            line-height:45px; 

        }

    }
    .fright{
        flex: 4;
        background: #87d0fa;
        line-height:45px; 
    }
  }
}
</style>