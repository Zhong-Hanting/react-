<template>
  <div class="home-header">
    <div class="left-box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
        
    <div class="right-box">
      <span>欢迎你,奇奇</span>
      <el-dropdown trigger="click" @command="handleCommand">      <!-- 在子组件上绑不到事件 只有在父集上绑定 -->
        <span class="el-dropdown-link">
          <el-avatar fit="fill" :size="30" src="abc.jpg"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal">个人中心</el-dropdown-item>
          <el-dropdown-item divided command="logout">注销</el-dropdown-item>    <!-- command 做标记 -->
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {out} from "@/api/account.js"
    export default {
         data(){
    return{
    photo:require("../assets/images/abc.jpg")
    }
  },    
    methods:{
      handleCommand(command){
        const vm=this;
        if(command==="logout"){
          const token=localStorage.getItem("token")    //把token 存本地
          out(token).then(data=>{
            if(data.success){
            // 清除本地存储
            localStorage.setItem('token','')

            // 页面跳转
            vm.$router.replace('/login')
          }
          })
        }
      }
    }
    }
</script>

<style lang="less" scoped>
    .home-header {
    height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-box {
    /deep/.el-breadcrumb__inner {
      color: #fff;
    }
  }
  .right-box {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #fff;
    .el-avatar {
      margin-left: 5px;
      /deep/img{
          width: 30px;
          height: 30px;
      }
    }
  }
}
</style>