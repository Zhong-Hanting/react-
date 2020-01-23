<template>
    <div>  
            <div class="nav"> 
              <div class="left">
                <ul class="content">     <!-- 这一步是better-scroll的固定写法  类名必须是content还不能用这个类名写样式 -->
                
                   <div  v-for="(v,n) in list" :key="v"  @click="handleclick(n)" :class="{choose:number==n,}">
                     <span>{{v.name}}</span>
                     </div>
                </ul>
                
                </div>              
                            
        <div class="right" >
           <ul class="content">
              <div :id="i" class="rtop"  v-for="(a,i) in list" :key="a" >
            <h5>{{a.name}}</h5>
            <div class="about" v-for="b in a.foods" :key="b">
              <div class="photo">
                <img :src="b.image"/>
              </div>
              <div class="word">
                <h4>{{b.name}}</h4>
                <p>{{b.description}}</p>
                <p>月销{{b.sellCount}}份 好评率{{b.rating}}</p>
                <p>
                  <span style="color:red;">&yen;{{b.price}}</span> <del>{{b.oldPrice}}</del>
                </p>
              </div>
              <div class="add">
                 <div class="button">
                     <span class="none" v-if="reduce=b.count>0?true:false" @click="count(-1,b.name)">-</span>
                    {{b.count}}
                     <span @click="count(1,b.name)">+</span>
                 </div>
              </div>
            </div>
          </div>
           </ul>
         
         
        </div>
      </div> 
    </div>
</template>

<script>
// import { goods} from "../../api/axios"
import BScroll from "better-scroll"
    export default {
        data(){
          return{
            reduce:false,
              goods:{},//商品初始
              // list:{},  //列表初始
              number:0, //选中菜单的初始值
             
          }
        },
        created(){
          // 这是没用vuex请求的
      //     goods().then((res)=>{
      //    this.goods=res.data.data
      //   //  console.log(this.goods)
      //   this.list=res.data.data
      //   // console.log( this.list)
      //  })

      // vuex的触发事件
        this.$store.dispatch("please") //通知actions发请求
        },
        methods:{
          // 菜单栏点击事件
            handleclick(index){
              // console.log(index)
              this.number=index;
              // 点击的时候  右边就滑到相同分类的菜品
              this.right.scrollToElement(document.getElementById(index),1000)
            },
            count(count,name){
              this.$store.commit("changecount",{count,name})
            }
           
            
        },
        mounted(){
          // better-scroll的使用
           this.right=new BScroll(".right",{
             click:true,   //为true才能监听点击事件
             probeType:3   
           });
          this.left=new BScroll(".left",{
             click:true,
          });

          // 监听滚动事件 使用实例对象.on 
          this.right.on("scroll",obj=>{
            let _y=Math.abs(obj.y)
            // console.log(_y)
            // console.log(this.getheight)
           for(let obj of this.getheight){
             //如果匹配坐标成功，则设置当前选中菜品分类
             if(_y<obj.max && _y>=obj.min){
               this.number=obj.index;
               break;
             }
           }
          
          })

        },
        computed:{
            getheight(){
              let arr=[];
              // 计算高度
              for(let i=0;i<this.list.length;i++){
                arr.push(document.getElementById(i).offsetHeight);
              }
            //计算累加高度
            let totalh=0;  //总高度
            let newarr=[];
            for( let n=0;n<arr.length;n++){
              // max 当前div的高度   min上一次div的高度
              newarr.push({max:arr[n]+totalh,min:totalh,index:n});
              // 每循环 一次就把高度加到总高度上
              totalh+=arr[n]
            }
            return newarr
            },
            list(){
               // 用计算属性接收vuex传过来的数据  可以节约性能
              return this.$store.state.list;
            },
            // totalmoney(){
            //   return this.$store.
            // }


        }
        
    }
</script>

<style lang="less" scope>
.choose{
  background: #fff;
}
    .nav {
      
      display: flex;
      .left{
         overflow: auto;
         width: 80px;
          height:600px;
        font-size: 14px;
         background: #87d0fa56;         
         flex-direction: column;
      

        div {        
          span{
          display: inline-block;
          align-items: center;
          display: flex;
          height: 80px;
          border-bottom: 1px solid #ccc;
          margin: 0 10px;
          }
        }
      }
      .right {
          height: 700px;
        flex: 10;
        display: flex;
        flex-direction: column;
        overflow:auto;
        background: #fff;
        .rtop {
          flex: 3;

          h5{
              background: #e8e7e8;
              padding: 5px;
          }
          .about {
            display: flex;
            padding:10px;
            .photo{
                flex: 3;
                img{
                  width: 100%;
                  height: 100%;
                }

            }
            .word{
                flex:5; 
                margin-left: 10px;
                p{
                    font-size: 12px;
                    span{
                      font-size: 14px;
                    }
                }
            }
            .add{
                flex:4; 
                display: flex;
                flex-direction: column-reverse;
                .button{
                    width: 100%;
                    height:30px;
                    text-align: center;
                    span{
                        display: inline-block;
                        font-size:20px;
                        width:29px;
                        height: 29px;
                        border-radius: 50px;
                        background:#87d0fa;
                        color: #fff;
                    }
                }
            }
          }
        }
        .rbottom {
          flex: 9;
          background: #fbfbfc;
            h5{
              background: #e8e7e8;
              padding: 5px;
          }
          .about {
            display: flex;
            padding:10px;
            background: #fff;
            .photo{
                flex: 3;
            }
            .word{
                flex:6; 
                p{
                    font-size: 12px;
                }
            }
            .add{
                flex:3; 
                display: flex;
                flex-direction: column-reverse;
                .button{
                    width: 100%;
                    height:30px;
                    text-align: center;
                    span{
                        display: inline-block;
                        font-size:20px;
                        width:29px;
                        height: 29px;
                        border-radius: 50px;
                        background: #87d0fa;
                        color: #fff;
                    }
                }
            }
          }
        }
      }
    }
</style>