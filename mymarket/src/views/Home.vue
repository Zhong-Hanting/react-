<template>
  <div class="home">
  <el-container>
       <leftmenu/> <!-- 引入侧边导航栏 -->
  <el-container>
    <el-header>
      <!-- 头部 -->
        <homeheader/>
    </el-header>
    <el-main>
      <router-view></router-view>     <!-- 二级路由的出口 -->  
    </el-main>
    <el-footer>
        <div class="fotterbox ">
           <span>成都梦幻青青树科技影视有限公司 版本号@2019.12.18 版权归我个人所有 不接受反驳</span><br/>
            <span>违法和不良信息举报电话：0755-83765566-9 粤公网安备 44030002000001号</span><br/>
               <span>Copyright 1998 - 2019 Dream. All Rights Reserved</span>
        </div>
    </el-footer>
  </el-container>
</el-container>
  </div>
</template>

<script>
import leftmenu from "../components/leftmenu"
import homeheader from "../components/header"



export default {
 methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components:{
      leftmenu,
      homeheader,
     
    }
}
</script>

<style lang="less" scoped>


  // 上面两个单处来的
.home{
  height: 100%;
  .el-header{
    background: #01c4fc;
  }

.el-container{
  height: 100%;
  border-right:none;
  
  .el-footer{ 
     //右侧页脚部分
    background: #faf8f9;
    
         .fotterbox{   
      text-align: center;
      color: rgba(51, 51, 51, 0.315);
      font-size:12px;
      line-height: 20px;
      
    }
    }
}
}

</style>
