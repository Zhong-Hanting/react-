<template>
    <div>
           <el-card class="box-card">
  <div slot="header" class="clearfix">
    <h2>超级vip账号列表</h2>
    <!-- 搜索框 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="formInline">
  <el-form-item label="搜索框" prop="username">
    <el-input v-model="formInline.username" placeholder="请输入要查找的账号"></el-input>
  </el-form-item>
  <el-form-item label="业务等级" prop="role">
    <el-select v-model="formInline.role" placeholder="业务等级">
      <el-option label="超级vip" :value="1"></el-option>
      <el-option label="普通vip" :value="0"></el-option>
    </el-select>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
     <el-button type="primary" @click="resetSubmit">重置</el-button>
  </el-form-item>
</el-form>
    <template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
     <el-table-column
      label="序号"
      >
    
      <template slot-scope="scope">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="账号"
      >
      <template slot-scope="scope">
        <i class="el-icon-user"></i>
        <span style="margin-left: 10px">{{ scope.row.username }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="邮箱"
      >
      <template slot-scope="scope">
        <i class="el-icon-message"></i>
        <span style="margin-left: 10px">{{ scope.row.email }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="业务等级"
      >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>业务等级: {{ scope.row.role===1?"超级vip":"普通vip" }}</p>
          <p>操作时间: {{ scope.row.inputtime |time }}</p>      <!-- 加一个过滤器 -->
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.role===1?"超级vip":"普通vip" }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
      <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->

          
        <el-button type="text" @click="open(scope.$index, scope.row)"> 删除</el-button>

      </template>
    </el-table-column>
  </el-table>
</template>
  </div>
</el-card>
  <div class="block">
   <!-- size-change	pageSize 改变时会触发 -->
   <!-- current-change	currentPage 改变时会触发 -->
   <!-- current-page	当前页数，支持 .sync 修饰符	number -->
   <!-- page-sizes	每页显示个数选择器的选项设置	number[]	—	[10, 20, 30, 40, 50, 100] -->
   <!-- page-size	每页显示条目个数，支持 .sync 修饰符 -->
  <!-- total	总条目数 -->
  <!-- layout	组件布局，子组件名用逗号分隔 -->

    <el-pagination    
      :current-page="currentPage4"
      :page-sizes="[4,50,100, 200, 300, 400]"
      :page-size="4"
      layout="total, sizes, prev, pager, next, jumper"
      :total="32">
    </el-pagination>
  </div>
  <!-- 弹出框账号修改-->
 

<el-dialog title="账号修改" :visible.sync="dialogFormVisible">
  <el-form
        :model="editform"
        status-icon
        :rules="rules"
        ref="editform"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号">
          <el-input type="username" v-model.number="editform.username"></el-input>
        </el-form-item>
       <el-form-item label="业务等级">
          <el-select v-model="editform.role" placeholder="请选择">
            <!-- 
              label ： 下拉框显示的值
              value ： 下拉框传递的值
            -->
            <el-option label="超级vip" :value="1"></el-option>
            <el-option label="普通vip" :value="2"></el-option>
          </el-select>
        </el-form-item>
       

      </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="sure">确 定</el-button>
    <el-button @click="dialogFormVisible = false">取 消</el-button>
  </div>
</el-dialog>


    </div>

</template>

<script>
// 引入
import {list,edit,del,search} from "@/api/account.js" ;

// 映入moment模块
import moment from "moment";


    export default {
          data() {
            
      return {
        dialogFormVisible:false,
        editform:{
          id:"",
          role:"",
          username:""
        },
        rules:{},
         // 重置搜索表单
      formInline:{
        username:"",
        role:""
      },

        tableData: [{
            id:"1",
        username:"11223344",
          email: '2016-05-02',
          role: '超级vip',
          inputtime: '诺小D'
        }, {
             id:"2",
             username:"22334455",
          email: '2016-05-04',
          role: '超级vip',
          inputtime: '诺小D'
        }, {
             id:"3",
             username:"33445566",
          email: '2016-05-01',
          role: '普通vip',
          inputtime: '诺小D'
        }, {
             id:"4",
             username:"44556677",
          email: '2016-05-03',
          role: '超级vip',
          inputtime: '诺小D'
        }],
        // 下面这个是分页的
     
        currentPage4: 1
      }
    },
    methods: { 

      handleEdit(i,row) {
        
        // 让对话框显示
       this.dialogFormVisible=true;
      //  debugger;
      //  把修改后的数据渲染到页面
      //  this.editform=row;   //引用传递 会相互影响 
      this.editform=Object.assign({},row)   //拷贝传递 
      //  console.log(row)
      },
      // 查询提交
      onSubmit(){
        search(this.formInline).then(data=>this.tableData=data)
      },
      // 表单重置
      resetSubmit(){
          this.$refs.formInline.resetFields()
          
      },
      sure(){
        // 编辑
        const vm = this
        edit(this.editform).then(data=>{
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
                  list().then(function(data){      
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
      },

      // 要弹框的删除
   open(index,row) {
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

           del(row).then(data=>{
          console.log(row)
          if (data.success) {
              vm.$message({
                type: "success",
                message: data.message,
                duration: 1000,
                showClose: true,
                onClose: () => {
                
                  //提示成功，刷新页面
                  list().then(function(data){      
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
      }
        // 不弹框的删除
      // handleDelete(index,row) {
      //   console.log(row)
      //   const vm = this;
      //   // debugger;
        // del(row).then(data=>{
        //   console.log(row)
        //   if (data.success) {
        //       vm.$message({
        //         type: "success",
        //         message: data.message,
        //         duration: 1000,
        //         showClose: true,
        //         onClose: () => {
        //           //关闭对话框
        //           vm.dialogFormVisible = false;
        //           //提示成功，刷新页面
        //           list().then(function(data){      
        //             // debugger
        //             vm.tableData = data;
        //           })
        //         }
        //       });
        //     }else{
        //        // 如果不合法
        //        vm.$message.error(data.message);
        //     }
        // })
      // }
      
      
    
     
  
    },
// 获取列表
    // 可以 在 created 或者 mounted 周期发 但是尽量早点发请求 节约性能  所以就在created发
    created(){
        list().then(data=>{
          // debugger;
          this.tableData=data; 
         
        })
    },
    filters:{
      time(t){
        return moment(t).format("YYYY-MM-DD,h:mm:ss")
      }

    }
    }
</script>

<style lang="less" scoped>
.block{
  text-align: center;
}
</style>