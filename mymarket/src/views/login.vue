<template>
  <div class="login">
   
    <h2>尊贵vip专属登录页面</h2>
    
    
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
  <el-form-item  prop="username">
    <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="请输入账号"></el-input>
  </el-form-item>
  <el-form-item  prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>  
  </el-form-item>
</el-form>
</div>
 <!-- show-message	是否显示校验错误信息 -->
 <!-- model	表单数据对象 -->
 <!-- rules	表单验证规则 -->
</template>

<script>
import {login} from "@/api/account.js"
  export default {
     data() {
      return {
        ruleForm: {     //下面两个rlueForm的两个动态属性  
         username: '',   
          password: ''
        },
        rules: {
           username: [
             { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
          ],
          password: [
             { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
         
        }
      };
    },
    methods: {
      submitForm(ruleForm) {
      
        
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {   
             const vm = this; 
             //如果表单里面填了值 且满足规则的话就走if
            login(this.ruleForm).then(data=>{
               if (data.success) {
                  // console.log(data.token)
              vm.$message({
                type: "success",
                message: data.message,     //提示信息  用后端返回的数据来显示 前端不写死 所以是
                duration: 2000,           //时间毫秒
                showClose: true,
                onClose(){
                  localStorage.setItem("token",data.token),
                  localStorage
                vm.$router.replace("/dashboard");
                }
                
              });
              
            }else{
               // 如果不合法
               vm.$message.error(data.message);
            } 
            })
          } else {    //不满足就走else
            this.$message({
          message: '密码或账号有误',
          type: 'error',
          duration:2000
      
        });
        
            return false;
          }
        });
      },
  }
  }
</script>

<style lang="less" scoped>
  .login{
    height: 100%;
    display:flex;
    justify-content: center;
     align-items: center;
    flex-direction: column;
    background: #fff;
   .el-form{
     
    width:300px;
    .el-button{
      width: 100%;
     
    }
   }
    
   
  }
</style>