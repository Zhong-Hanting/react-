<template>
    <div>
        <el-card class="box-card">
  <div slot="header" class="clearfix">
    <h2>添加商品分类</h2>
  </div>
  <!-- 表单 -->
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
  <el-form-item label="分类名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="分类描述" prop="desc">
    <el-input v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="分类序号" prop="order">
    <el-input-number v-model="ruleForm.order" controls-position="right" :min="1" :max="20"></el-input-number>
  </el-form-item>
  


  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-card>

    </div>
</template>

<script>
import {typeadd} from "@/api/account.js"
    export default {
        data(){
             
        
        return{
                ruleForm:{
                  name:"",
                  order:"",
                  desc:""
                },
                rules:{
                 name: [
          { required: true, message: "请输入分类名 ", trigger: "blur" },
          { min:2, max: 6, message: "名字长度在 2 到 6 个字符哦", trigger: "blur" }
        ]

                },
                order:"",
                
            }
            
        },
        methods:{
         submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          //  this.$message({
          // message: '保存成功',
          // center: true,
          // type:"success",    
        // })
        const vm=this;
        typeadd(this.ruleForm).then(data=>{
          if(data.success){
            vm.$message({
              type:"success",
              message:"data.message",
              duration:2000,
              showClose:true,
            })
            this.$router.push("/home/typelist")
          }else{
            vm.$message.error(data.error)
          }
        })

        
        } else {
          alert('错了哦，请重试');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
    }
</script>

<style lang="less" scoped>

</style>