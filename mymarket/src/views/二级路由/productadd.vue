<template>
    <div>
<!-- 添加商品 -->
<!-- 卡片组件 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>添加商品</span>
  </div>
<!-- 表单组件 -->
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="商品名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="食品分类" prop="category">
    <el-select v-model="ruleForm.category" placeholder="请选择食品分类">
      <el-option v-for="v in produclist" :key="v.id" :label="v.name" :value="v.name"></el-option>
                  <!-- 循环那个数组  达到动态渲染  可以和后台数据 联动  就不会是死数据了 -->
    </el-select>
  </el-form-item>
  
 
  <el-form-item label="商品特色">
    <el-checkbox-group v-model="ruleForm.feature">
      <el-checkbox label="新品上市" name="type"></el-checkbox>
      <el-checkbox label="二单半价" name="type"></el-checkbox>
      <el-checkbox label="主打产品" name="type"></el-checkbox>
      <el-checkbox label="火爆产品" name="type"></el-checkbox>
      <el-checkbox label="祖传手艺" name="type"></el-checkbox>
      <el-checkbox label="源自四川" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <!-- 】商品图片 -->

  <el-form-item label="商品图片" prop="img">
      <!-- 上传图片插件 -->
   <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>
  <el-form-item label="是否促销" prop="isPromotion">
    <el-radio-group v-model="ruleForm.isPromotion">
      <el-radio label="促销"></el-radio>
      <el-radio label="不促销"></el-radio>
    </el-radio-group>
  </el-form-item>
  <!-- 包装费 -->
  <el-form-item label="包装费">
   <el-input-number v-model="ruleForm.packingexpense" :min="1" :max="20" label="描述文字"></el-input-number>
  
  </el-form-item>
  <!-- 价格 -->
  <el-form-item label="价格">
   <el-input-number v-model="ruleForm.price" :min="1" :max="20" label="描述文字"></el-input-number>
  
  </el-form-item>
  <el-form-item label="商品描述" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-card>

    </div>
</template>

<script>
import {shopadd,typelist} from "@/api/account.js";
    export default {
        data() {
      return {
        ruleForm: {
          name: '',
        category: [],
          feature: [],
         isPromotion: '',
          packingexpense: "",
         price:"",
          desc: '',
          img:''
        },
        produclist:[],   //创建一个空数组 来接收 下面created 里面获取到的列表数据 然后可以让上面循环达到动态渲染


           num: 1,
           count: 1,
        rules: {
          name: [
            { message: '请输入商品名称', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
          ],
          region: [
            { message: '请选择商品分类', trigger: 'change' }
          ],
          
         
          type: [
            { type: 'array', message: '请至少选择一个商品特色', trigger: 'change' }
          ],
          resource: [
            { message: '请选择商品促销', trigger: 'change' }
          ],
          desc: [
            { message: '请填写商品描述', trigger: 'blur' }
          ]
        },
         dialogImageUrl: '',
        dialogVisible: false,
        disabled: false

      };
    },
    methods: {
      submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            const vm = this;
            // const feature=JSON.parse(row.feature)
            this.ruleForm.feature= JSON.stringify(this.ruleForm.feature)    //把数据转换成服务器接收的json格式
            shopadd(this.ruleForm).then(data=>{
             if (data.success) {
              vm.$message({
                type: "success",
                message: data.message,     //提示信息  用后端返回的数据来显示 前端不写死 所以是
                duration: 2000,           //时间毫秒
                showClose: true,
              });
              this.$router.push("/home/productlist")
            }else{
               // 如果不合法
               vm.$message.error(data.message);
            } 
            })
          } else {
            console.log('保存失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    },
    filters:{   //过滤
    // type(v){
    //   // 如果值存在就进行转换
         //这里好像是错的
    //   if(v){
    //     try{return JSON.parse(v).join(" ");
    //   }catch{
    //     return v.join(" ")
    //   }
    // }
    // }
    },
    created(){
      // 在生命周期的created重新发请求 获取类型的分类 
      typelist().then(data=>{
        // console.log(data)
        this.produclist=data   //把获取到的类型分类渲染到上面创建分类的空数组里面
      })
    }
  }
    
</script>

<style lang="scss" scoped>

</style>