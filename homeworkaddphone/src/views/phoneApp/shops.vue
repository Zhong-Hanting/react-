<template>
  <div class="bigbox">
    <div class="top">
        <div class="tophead">
            <div class="discuss-left">
          <h2>4.2</h2>
          <p class="min">综合评分</p>
          <p class="c999">高于周边商家69.2%</p>
        </div>
        <div class="right">
          <template>
                            <Rate allow-half v-model="valueHalf2" />
                        </template>
        </div>
        </div>
        
        <span></span>
    </div>
    <div class="bottom">
      <div class="btitle">
        <ul class="evaluate">
          <li style="background:#87d0fa;">全部116</li>
          <li style="background:aqua">满意97</li>
          <li style="background:#f3f3f3;">不满意19</li>
        </ul>
        <div class="contentcenbg">
          <label>
            <input type="checkbox"/>
          </label>
          只看有内容的评价
        </div>
      </div>
      <div class="scroll">
      <ul class="content">
        <div class="user">
            <div class="userdiv" v-for="v in ratin" :key="v">
              <img :src="v.avatar"  />
              <div class="li-right">
                <div class="liright-head">
                  <div class="liheadleft">
                    <p>{{v.username}}</p>
                    <p>{{v.rateTime}}</p>
                  </div>
                  <p class="liheadright">2016-07-23 09:52</p>
                </div>

                <p class="word">{{v.text}}</p>
                <p>
                  <img src="" alt />
                  <span class="bordergua" v-for=" i in v.recommend" :key="i">{{i}}</span>
                 
                </p>
              </div>
            </div>
            
          </div>
      </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
import {ratings} from "../../api/axios";
import BScroll from "better-scroll";
export default {
  data() {
    return {
       valueHalf2:4.2,

      ratin:{}
    };
  },
  created(){
    ratings().then(res=>{
        this.ratin=res.data.data
    })
    // console.log(this.ratin)
  },
  mounted(){
    this.scroll=new BScroll(".scroll")
  }
};
</script>

<style  lang="less" scoped>

.bigbox {
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
      flex-grow: 1 0 115px;

    .tophead{
        display: flex;
        .discuss-left{
            text-align: center;
            flex: 5;
            h2{
                color: orange;
            }
            .min{
                font-weight: 600;
            }
            .c999{
                color: #ddd;
                font-size: 12px;
            }
        }
        .right{
            flex: 7;
        }
    }
    span{
        display: inline-block;
        width: 100%;
        height: 20px;
        background:#ddd;
    }
  }
  .bottom {
    flex: 1;
    background: #fff;
    .btitle {
        background: #fff;
        display: flex;
        flex-direction: column;
        border-bottom: 1px  solid #ccc;
      .evaluate {
          width: 300px;
            margin: 0 auto;
         padding: 10px 0;
         border-bottom: 1px  solid #ddd;
        li {
          list-style: none;
          display: inline-block;
          width: 80px;
          text-align: center;
          height: 30px;
          margin-left: 5px;
          line-height: 30px;

        }
      }
      .contentcenbg {

        width: 80%;
        color: #ccc;
        margin: 15px auto;
        input{
            width: 20px;
            height: 20px;

            border-radius:100%;
        }
      
      }
    }
    .user{ 
    .userdiv{
          display: flex;
          width: 90%;
          margin: 0 auto;
          padding: 10px;
          font-size: 12px;
          border-bottom:1px solid #ddd;
          .liright-head {
            display: flex;
            width: 100%;
            justify-content: space-between;
            .liheadright {
              color: #999;
              float: right;
            }
            
           
          }
          img {
            width: 30px;
            height: 30px;
          }
          .li-right {
              padding-left:10px;
              width: 100%;
            img {
              width: 12px;
              height: 12px;
            }
          }
        }
        }

  }
}

// 单独补的
 .li-right{
        span{
          display: inline-block;
          border: 1px solid #ddd;
          margin-left: 5px;
          margin-top:3px;
          text-align: center;
          padding: 5px;
          line-height: 14px;
          width:100px;
          height: 25px;  
          color: #ddd;
        }      
          }
          .word{
              font-size: 14px;
          }
</style>