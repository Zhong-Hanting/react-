import Vue from 'vue'
import Vuex  from 'vuex'
import { goods} from "../api/axios"



Vue.use(Vuex)  

var store=new Vuex.Store({
    state:{
        list:[],  //列表初始
    },
    mutations:{
     please(state,val){  //val 是用来接收actions的发过来的数据的
        //  改变state里面的数据
         state.list=val
        
     },
     changecount(state,num){
        for(let a of state.list){   //循环遍历list列表
            for( let x of a.foods){    //在循环list里面的foods
               if(x.name==num.name){  
                   x.count+=num.count
                   return;
               }
            }
        }
     } 
    
    },
    actions:{
        please(context){
        goods().then(res=>{
            // 砸门自己家一个价格的字段
            for(let a of res.data.data){
                for( let x of a.foods){
                    x.count=0;
                }
            }
        
        //  console.log(res.data.data)
    // 通知mutations改数据并把从后台获取到的数据发给mutations
            context.commit("please",res.data.data)

            })
            
           
        }
    },
    getters:{   //相当于vue里面的计算属性
        shopcarprice(state){
            let arr=[]   //定义一个购物车列表的空数组
            for(let ab of state.list){
                for( let ac of ab.foods){
                    if(ac.count>0){
                        arr.push(ac)
                    }
                }
            }
            return arr;
        },
        
    }
})
 
 

export default  store