<template>
    <div>
        <el-card class="box-card">
  <div slot="header" class="clearfix">
    <h1>商品列表</h1>
  </div>
   <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="包装费用">
            <span>{{ props.row.packingexpense }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="是否促销">
            <span>{{ props.row.isPromotion }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="商品价格">
            <span>{{ props.row.price }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="商品特色">
            <span>{{ props.row.feature|renderFeature}}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
      <el-table-column
      label="录入时间"
      prop="inputtime">
       <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.inputtime | time }}</span>
                </template>
    </el-table-column>

 


    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-card>
<!-- 分页 -->
<div class="block">
   
    <el-pagination
    
    
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  <!-- 编辑的对话框 -->
  <el-dialog title="商品修改" :visible.sync="dialogFormVisible">
            <el-form size="small" :model="ruleForm" style="width: 560px;" ref="ruleForm" label-width="80px">
                <!-- 名称 -->
                <el-form-item label="商品名称">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>

                <!-- 分类 -->
                <el-form-item label="商品分类">
                    <el-select v-model="ruleForm.category" placeholder="请选择商品分类">
                        <el-option label="热销" value="热销"></el-option>
                        <el-option label="咖啡" value="咖啡"></el-option>
                        <el-option label="热菜" value="热菜"></el-option>
                        <el-option label="凉菜" value="凉菜"></el-option>
                        <el-option label="饮品" value="饮品"></el-option>
                        <el-option label="火锅" value="火锅"></el-option>
                    </el-select>
                </el-form-item>

                <!-- 特色 -->
                <el-form-item label="商品特色">
                    <el-checkbox-group v-model="ruleForm.feature">
                        <el-checkbox label="新品上市" name="feature"></el-checkbox>
                        <el-checkbox label="第二单半价" name="feature"></el-checkbox>
                        <el-checkbox label="主打产品" name="feature"></el-checkbox>
                        <el-checkbox label="火爆产品" name="feature"></el-checkbox>
                        <el-checkbox label="祖传手艺" name="feature"></el-checkbox>
                        <el-checkbox label="源自四川" name="feature"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>

                <!-- 文件上传 -->
                <el-form-item label="商品图片">
                    <!-- 
              action : 选中时，自动上传的地址
              show-file-list ： 是否显示已上传文件列表
              on-success     :  文件上传成功时的钩子函数（即事件回调函数）	
            :action="uploadUrl"
            :on-success="handleUploadSuccess"
          -->
                    <!-- <el-upload
            class="avatar-uploader"
            :show-file-list="false"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>-->
                </el-form-item>
                <!-- 是否促销 -->
                <el-form-item label="是否促销">
                    <el-radio-group v-model="ruleForm.isPromotion">
                        <el-radio label="促销"></el-radio>
                        <el-radio label="不促销"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <!-- 单规格:   的 包装费 和 价格 -->
                <!-- 单规格的包装费 -->
                <el-form-item label="包装费">
                    <el-input-number v-model="ruleForm.packingexpense" :min="0" :max="20" label="包装费"></el-input-number>
                </el-form-item>
                <!-- 单规格的价格 -->
                <el-form-item label="价格">
                    <el-input-number v-model="ruleForm.price" :min="20" label="价格"></el-input-number>
                </el-form-item>

                <!-- 商品描述 -->
                <el-form-item label="商品描述">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="save">确认修 改</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
// 引入
import {productlist ,productdel,productedit} from "@/api/account.js" ;
import moment from "moment";
    export default {
         data() {
           
      return {
        // 编辑框里面的表格
          ruleForm: {
          name: '',
        category:"",
          feature: [],
         isPromotion: '',
          packingexpense: "",
         price:"",
          desc: '',
          img:''
        },




        currentPage4:1,   //分页
       dialogFormVisible: false,     //弹出的那个编辑框
        tableData: [{
          id:"1",
          name:"小小奶茶",
          sort:"奶茶",   //分类
          promotion:"是",   //是否促销
          price:16,
          features: "天女星名小吃 好喝好看 好便宜",  //特色
          pagprice:2,    //包装费
          shopabout:"近期上市  当前网红热门单品 小姐姐打卡必备",
          time:"2019-10-10"
        }, {
           id:"2",
          name:"么么草莓蛋糕",
          sort:"奶茶",   //分类
          promotion:"是",   //是否促销
          price:16,
          features: "天女星名小吃 好喝好看 好便宜",  //特色
          pagprice:2,    //包装费
          shopabout:"近期上市  当前网红热门单品 小姐姐打卡必备",
          time:"2019-10-10"
        }, {
           id:"3",
          name:"憨憨雪糕",
          sort:"奶茶",   //分类
          promotion:"是",   //是否促销
          price:16,
          features: "天女星名小吃 好喝好看 好便宜",  //特色
          pagprice:2,    //包装费
          shopabout:"近期上市  当前网红热门单品 小姐姐打卡必备",
          time:"2019-10-10"
        }, {
           id:"4",
          name:"糖糖草莓糖",
          sort:"奶茶",   //分类
          promotion:"是",   //是否促销
          price:16,
          features: "天女星名小吃 好喝好看 好便宜",  //特色
          pagprice:2,    //包装费
          shopabout:"近期上市  当前网红热门单品 小姐姐打卡必备",
          time:"2019-10-10"
        }]
      }
      
    },
    methods:{
       handleDelete(index,row) {
          
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          
          
        }).then(() => {
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
          const vm = this;

           productdel(row.id).then(data=>{
          console.log(row)
          if (data.success) {
              vm.$message({
                type: "success",
                message: data.message,
                duration: 1000,
                showClose: true,
                onClose: () => {
                
                  //提示成功，刷新页面
                  productlist().then(function(data){      
                    // debugger
                    vm.tableData = data;
                  })
                }
              });
            }else{
               // 如果不合法
               vm.$message.error(data.message);
            }
        })


        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },



      // 点击编辑显示那个编辑对话框
      handleEdit(index,row){  
        // debugger;
        this.dialogFormVisible=true;
        //把修改后的数据传到页面 上 和列表 一样
        this.ruleForm=Object.assign({},row) 
        this.ruleForm.feature=JSON.parse(this.ruleForm.feature);
      // debugger;

      },
       save(ruleForm){
         const vm=this;
         this.ruleForm.feature=JSON.stringify(this.ruleForm.feature)
          productedit(ruleForm).then(data=>{
            console.log(data)
              if (data.success) {
              vm.$message({
                type: "success",
                message: data.message,
                duration: 1000,
                showClose: true,
                onClose: () => {
                  //关闭对话框
                  vm.dialogFormVisible = false;
                  //提示成功，刷新页面
                  productlist().then(function(data){      
                    // debugger
                    vm.tableData = data;
                  })
                }
              });
            }else{
               // 如果不合法
               vm.$message.error(data.message);
            } 
          })
       }
      
       
    },
    created(){  //获取列表信息
  productlist().then(data=>{this.tableData=data})
   
    },
    //定义过滤器
  filters: {
    //过滤名称：过滤方法
    //参数1：待处理的值
    renderFeature(value) {
      //如果值存在
      if (value) {
        try {
          //将数据转换为后端需要的数组格式
          return JSON.parse(value).join("、");
        } catch {
          return value.join("、");
        }
      }
    },
    time(t){     //时间的那个啥玩意 可以变时间的
        return moment(t).format("YYYY-MM-DD,h:mm:ss")
      }
  }

    }
</script>

<style lang="scss" scoped>

</style>