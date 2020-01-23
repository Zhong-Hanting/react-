<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账号添加</span>
      </div>
      <!-- 账号 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="username" v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop=" password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model.number="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="业务等级" prop="role">
          <el-select v-model="ruleForm.role" placeholder="请选择">
            <!-- 
              label ： 下拉框显示的值
              value ： 下拉框传递的值
            -->
            <el-option label="超级vip" value="1"></el-option>
            <el-option label="普通vip" value="0"></el-option>
          </el-select>
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
import {add} from "@/api/account.js" ;
export default {
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.password !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.checkPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
           password: '',
          checkPass: '',
          role:"",
          username:"",
          email:""         
        },
        rules: {
          username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min:2, max: 6, message: "长度在2  到 6 个字符", trigger: "blur" }
        ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        
        }
      };
  
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          
          //  this.$message({
          // message: '保存成功',
          // center: true,
          // type:"success",    
    
        // })
        const vm = this;   //因为里面的this和外面的指向不一样  所以在外面设置一个变量接取 在里面引用
        add(this.ruleForm).then(data=>{
          // console.log(data.username)
          
            // debugger;
          if (data.success) {
              vm.$message({
                type: "success",
                message: data.message,     //提示信息  用后端返回的数据来显示 前端不写死 所以是
                duration: 2000,           //时间毫秒
                showClose: true,
              });
              this.$router.push("/home/accountlist")
            }else{
               // 如果不合法
               vm.$message.error(data.message);
            }
        })
        } else {
          this.$message.error('错了哦，请检查密码或账号');
          return false;
        }
      });
    },
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields();
    }
  }
};

  



</script>

<style lang="less" scoped>
.el-form{
  margin-left:400px;

.el-input{
  width: 300px;

}
}
</style>