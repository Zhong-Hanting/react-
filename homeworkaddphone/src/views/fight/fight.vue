<template>
    <div class="bigbox">
        <div class="main">
            <div @click="handle">发牌器</div>
               <div class="first">{{first}}</div>
               <div class="second">{{second}}</div>
               <div class="third">{{third}}</div>
               <div class="last">{{last}}</div>


        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // 总牌数
                all:[99,999],
                // 三个玩家
                first:[],
                second:[],
                third:[],
                last:[]
            }
        },
        created(){   //在创建后循环   
            for(var i=2; i<15; i++){
                this.all.push(i,i,i,i)   //循环遍历出剩余牌数 加到all里面
            }
            console.log(this.all)
        },
        methods:{
            handle(){
                this.first=this.send(this.first)
                this.second=this.send(this.second)
                this.third=this.send(this.third)
            },
        // 封装发牌这个歌函数
            send(card){
                for(var i=0;i<17;i++){
                    let index=Math.floor(Math.random()*this.all.length)   //求随机17张牌的索引
                    // console.log(index)
                    card.push(this.all[index]);    // 抽取牌
                    this.all.splice(index,1);    //从总库取出这张牌                   
                }
                // 排序
            card.sort((a,b)=>a-b)

            // 链式操作  用join把数组转为字符串  replace是替换字符
        return card.join("").replace(/11/g,"J").replace(/12/g,"Q").replace(/13/g,"K").replace(/14/g,"A").replace(99,"小王").replace(999,"大王")
            }

            
        }

    }
</script>

<style lang="less">
body,html{
    margin: 0;
    padding: 0;
}
       .bigbox{
           background: #fff;
         .main{
             width: 500px;
             height: 500px;
             background: greenyellow;
             border: 2px solid #ccc;
             position: relative;
             .handle{
                 width: 100px;
                 height: 40px;
                 background: blue;
             }
             .first{
                 width: 50px;
                 height: 200px;
                 background: pink;
                 position: absolute;
                 left: 0;
                 top:100px;
             }
             .second{
                 width: 100px;
                 height: 40px;
                 background: blue;
                 position: absolute;
                 left:200px;
                 bottom:0;
                 
             }
             .third{
                 width: 50px;
                 height: 200px;
                 background: pink;
                  position: absolute;
                 right:0;
                 top:100px;
               
             }
             .last{
                 width: 80px;
                 height: 40px;
                 margin: 200px auto;
                 background: #ccc;
             }
            
         }
       }
             
</style>