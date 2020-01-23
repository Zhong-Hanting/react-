<template>
  <div class="leftbox">
    <el-aside>
      <el-col :span="12">
        <el-menu
          unique-opened
          :default-active="$route.path"  
          class="el-menu-vertical-demo"
          router
       
          background-color="#56d0f8"
          text-color="#fff"
          active-text-color="gold"
        >
          <!-- 当前激活菜单的文字颜色 -->
          <template v-for="v in menulist">     <!-- 遍历循环下面数据的数组 -->
          <template v-if="v.role.includes(userrole)">
            <!-- 没有二级路由的 -->
            <el-menu-item v-if="!v.children" :index="v.index" :key="v.id">       <!-- v-if是对有没有二级路由进行判断 -->
              <i :class="v.cls"></i>    <!-- 这里是那个图标  动态加载-->
              <span slot="title">{{v.title}}</span>   <!-- 这里是那个名字  动态加载-->
            </el-menu-item>
            <!-- 有二级路由的 -->  
            
            <el-submenu v-else :index="v.index" :key="v.id">        <!-- 如果有子级的就会走这一步-->
              <template slot="title">
                <i :class="v.cls"></i>    <!-- 图标  动态加载-->
                {{v.title}}             
              </template>
              <el-menu-item v-for="child in v.children" :index="child.index" :key="child.index">{{child.name}}</el-menu-item>    <!-- 循环子级 -->
            </el-submenu>
          </template>
          </template>

          <!-- 出货管理部分 -->
          <!-- <el-submenu index="1-6">
            <template slot="title">
              <i class="el-icon-folder-remove"></i>
              <span>出货管理</span>
            </template>
            <router-link to="/home/e">
              <el-menu-item index="1-5-1">出货是这</el-menu-item>
            </router-link>
            <router-link to="/home/f">
              <el-menu-item index="1-5-2">选项2</el-menu-item>
            </router-link>
          </el-submenu>-->
          <!-- 统计管理部分 -->
          <!-- <el-submenu index="1-7">
            <template slot="title">
              <i class="el-icon-s-grid"></i>
              <span>统计管理</span>
            </template>
            <router-link to="/home/g">
              <el-menu-item index="1-7-1">选项1</el-menu-item>
            </router-link>
            <router-link to="/home/h">
              <el-menu-item index="1-7-2">选项2</el-menu-item>
            </router-link>
          </el-submenu>-->
          <!-- 账号管理部分 -->
          <!-- <el-submenu index="1-8">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item index="1-8-1">选项1</el-menu-item>
            <el-menu-item index="1-8-2">选项2</el-menu-item>
          </el-submenu>-->
          <!-- 会员管理部分 -->
          <!-- <el-submenu index="1-9">
            <template slot="title">
              <i class="el-icon-thumb"></i>
              <span>会员管理</span>
            </template>
            <el-menu-item index="1-9-1">选项1</el-menu-item>
            <el-menu-item index="1-9-2">选项2</el-menu-item>
          </el-submenu>-->
        </el-menu>
      </el-col>
    </el-aside>
  </div>
</template>

<script>
import {userrole}  from "../api/account"
export default {
    
  data() {
    return {
      menulist: [
        {
          id: 1,
          index: "/dashboard",
          cls: "el-icon-s-cooperation",
          title: "首页",
          role:[1,2]   //1 2 表示 两个角色都能看
        },
        {
          id: 2,
          index: "2",
          cls: "el-icon-menu",
          title: "商品分类管理",
          role:[1],   //只能超级vip查看 普通vip看不到
          children: [
            { index: "/home/typelist", name: "商品分类列表" },
            { index: "/home/typeadd", name: "添加商品分类" }
          ]
        },
        {
          id: 3,
          index: "3",
          cls: "el-icon-s-goods",
          title: "商品管理",
          role:[1],
          children: [
            { index: "/home/productlist", name: "商品列表" },
            { index: "/home/productadd", name: "添加商品" }
          ]
        },
        {
          id: 4,
          index: "4",
          cls: "el-icon-s-custom",
          title: "账号管理",
           role:[1,2],   
          children: [
            { index: "/home/accountlist", name: "账号列表" },
            { index: "/home/accountadd", name: "增加账号" },
            { index: "/home/passwordchange", name: "修改密码" }
          ]
        },
        {
          id: 5,
          index: "5",
          cls: "el-icon-s-data",
          title: "统计管理",
           role:[1,2],
          children: [
            { index: "/home/sta", name: "销售统计" },
            { index: "/home/stocksta", name: "进货统计" }
          ]
        },
        {
          id: 6,
          index: "6",
          cls: "el-icon-s-tools",
          title: "菜单管理",
           role:[1,2],
          children: [
            { index: "/home/menulist", name: "菜单管理" },
            { index: "/home/menuadd", name: "添加菜单" }
          ]
        }
      ],
      userrole:"",  //占位的  
    };
  },
  created(){
    userrole().then(data=>{
      this.userrole=data.role;
    })
  }
};
</script>

<style lang="less" scoped>
router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
}
.el-menu{
  border-right: none !important;
}
.leftbox {
  background: #56d0f8;
 

  .el-aside {
    width: 200px !important;
    background: #56d0f8;
    .el-col {
      width: 100%;
      .el-menu {
        background: #fff;
      }
    }
  }
}
</style>