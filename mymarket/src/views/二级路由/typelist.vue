<template>
    <div>
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <h2>商品分类</h2>
  </div>

  <!-- 查询 -->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="搜索">
    <el-input v-model="formInline.name" placeholder="请输入分类名"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>

<!-- 列表 -->
   <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="分类id"
    >
      <template slot-scope="scope">
        <i class="el-icon-message-solid"></i>
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="分类名称"
     >
      <template slot-scope="scope">
        <i class="el-icon-burger"></i>
        <span style="margin-left: 10px">{{ scope.row.name}}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="分类序号"
      >
      <template slot-scope="scope">
        <i class="el-icon-lollipop"></i>
        <span style="margin-left: 10px">{{ scope.row.order }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="描述"
     >
      <template slot-scope="scope">
        <i class="el-icon-ice-tea"></i>
        <span style="margin-left: 10px">{{ scope.row.desc }}</span>
      </template>
    </el-table-column>
   
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
       <el-button size="small" type="text" @click="open(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
     <div class="block">
    <el-pagination
    
      :current-page="currentPage4"
      :page-sizes="[4, 200, 300, 400]"
      :page-size="4"
      layout="total, sizes, prev, pager, next, jumper"
      :total="20">
    </el-pagination>
  </div>
</el-card>
<el-dialog title="商品类型修改" :visible.sync="dialogFormVisible">
      <el-form
        :model="editAcountForm"
        status-icon
        ref="editAcountForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品类别名称" prop="name">
          <el-input v-model="editAcountForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品类别序号" prop="order">
          <el-input v-model="editAcountForm.order"></el-input>
        </el-form-item>
        <el-form-item label="商品类别描述" prop="desc">
          <el-input v-model="editAcountForm.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editForm">修改</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
   

    </div>
</template>

<script>
import {typelist,shopchange,typedel,typesearch} from "@/api/account.js" ;
    export default {
        data() {
      return {
        // 编辑框的
         dialogFormVisible:false,
      editAcountForm:'',

       formInline: {   //查询
          name: '',
        },



          currentPage4:1,
        tableData: [{
            id:"1",
            number:"1",            
          name: '王小虎',
          about: '好喝'
        }, {
          id:"2",
            number:"2",            
          name: '王小虎',
          about: '好辣'
        }, {
         id:"3",
            number:"3",            
          name: '王小虎',
          about: '好甜'
        }, {
          id:"4",
            number:"4",            
          name: '王小虎',
          about: '好吃'
        }]
      }
    },
    created(){   //获取列表信息
      typelist().then(data=>{this.tableData=data})
    },
    methods:{  
        onSubmit(){   //搜索
        // debugger;
        typesearch(this.formInline).then(data=>{
          // console.log(data);
          this.tableData = data
        })
        },

      // 确认是否删除
       open(i,row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!',   
          // });
          const xm=this;
           
          typedel(row).then(data=>{
              
            if(data.success){
              xm.$message({
                type:"success",
                message:data.message,
                duration:1000,
                showClose:true,
                onClose:()=>{
                typelist().then(function(data){
                  xm.tableData=data;
                })
                }
              })
            }else{
              xm.$message.error(data.message)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      handleEdit(index,row) {
        this. dialogFormVisible=true;   //让弹出框显示
         this.editAcountForm = Object.assign({}, row);   //拷贝传递
         
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
         handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

      
       editForm() {
      const vm = this;
      // 编辑提交
     shopchange(this.editAcountForm).then(data => {
        //  debugger
        if (data.success) {
          vm.$message({
            type: "success",
            message: data.message,
            duration: 500,
            showClose: true,
            onClose: () => {
              //关闭对话框
              vm.dialogFormVisible = false;
              //提示成功，刷新页面
               typelist().then(function(data) {
                // debugger
                vm.tableData = data;
              });
            }
          });
        } else {
          // 如果不合法
          vm.$message.error(data.message);
        }
      });
    },
      
    }
    }


   
</script>

<style lang="less" scoped>
.block{
  margin-left: 300px;
  margin-top:10px;
}
</style>