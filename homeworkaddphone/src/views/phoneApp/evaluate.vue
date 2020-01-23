<template>
    <div class="business">
        <div class="header">
            <div class="headerLeft">
                <h3>粥品香坊(大运村)</h3>
                <p>
                    <img src="/images/star24_on@2x.png" alt="">
                    <img src="/images/star24_on@2x.png" alt="">
                    <img src="/images/star24_on@2x.png" alt="">
                    <img src="/images/star24_on@2x.png" alt="">
                    <img src="/images/star24_off@2x.png" alt="">
                    <span>（661）月售690单</span>
                </p>
            </div>
            <div class="headerRight">
                <img src="/images/aixin.jpg" alt=""><br>
                <p>已收藏</p>
            </div>
        </div>
        <div class="prices">
            <div class="priceItem specials">
                <p class="priceTitle">起送价</p>
                <h3><span>20</span> <small>元</small></h3>
            </div>
            <div class="priceItem specials">
                <p  class="priceTitle">商家配送</p>
                <h3><span>4</span> <small>元</small></h3>
            </div>
            <div class="priceItem">
                <p  class="priceTitle">平均配送时长</p>
                <h3><span>39</span><small>分钟</small></h3>
            </div>
        </div>
        <div class="boxs"></div>
        
        <!-- 内容区 -->
        <div class="main">
            <div class="notice mainitem">
                <h3>公告与活动</h3>
                <p>{{details.bulletin}}
                </p>
                <ul>
                    <li v-for="(value,n) in details.supports" :key="n"><img src="" alt="">{{value.description}}</li>
                </ul>
            </div>
              <div class="boxs"></div>
            <div class="scenery mainitem">
                <h3>商家实景</h3>
                <div class="sceneryImgs">
                    <img v-for="(imgitem,i) in details.pics" :key="i" :src="imgitem" alt="">
                </div>
            </div> 
             <div class="boxs"></div>
            <div class="message mainitem">
                <h3>商家信息</h3>
                <ul>
                    <li v-for="(val,index) in details.infos" :key="index">{{val}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {seller} from '../../api/axios'
    export default {
        data() {
            return {
                details: [],
            }
        },
        created(){
            seller().then((res)=>{
                this.details=res.data.data
            })
        }
    }
</script>

<style lang="less" scoped>
li{
    list-style: none;
}
.boxs{
    width: 100%;
    height: 20px;
    background-color: #f4f5f7;
    border-bottom: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
}
.business{
    width: 100%;
    height: 100%;
    background: #fff;
    .header{
        display:flex;
        width: 90%;
        height:70px;
        border-bottom: 1px solid #e7e7e7;
        margin: 0 auto;
        .headerLeft{
            width: 80%;
            padding:3%;
            color: #666;
            h3{
                font-size:14px;
                color: #000;
            }
            img{
                width: 14px;
                margin:1%;
            }
            span{
                font-size: 12px;
            }
        }
        .headerRight{
            width: 20%;
            padding-top:8px;
            font-size: 12px;
            text-align: right;
            img{
                width: 27px;
                margin-right:8%;
            }
        }
    }
    .prices{
        height:70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .priceItem{
            height:70%;
            flex: 1;
            text-align: center;
            .priceTitle{
                color: #666;
                font-size:12px;
            }
            h3{
                font-weight: 500;
                small{
                    font-size:13px;
                }
                span{
                    font-size: 22px;
                    display: inline-block;
                }
            }
        }
        .specials{
            border-right: 1px solid #e7e7e7;
        }
    }
    .main{
        width: 100%;
        
        .mainitem{
            width: 100%;
            padding:20px 20px 0;
            box-sizing: border-box;
            h3{
                font-size:14px;
                margin-bottom: 10px;
                margin-left:-5px;
            }
            ul{
                width: 100%;
                li{
                    height:40px;
                    line-height: 40px;
                    font-size: 12px;
                    text-indent: 30px;
                    border-bottom: 1px solid #e7e7e7;
                    &:last-child{
                        border-bottom: 0;
                    }
                }
            }
        }
        .notice{
            p{
                color: #eb6267;
                font-size: 12px;
                line-height:1.8em;
            }
            li{
                text-indent: 15px;
                &:nth-child(1){
                    background: url('../../../public/images/decrease2.png') no-repeat 0 10px;
                    background-size:18px 18px;
                }
                &:nth-child(2){
                    background: url('../../../public/images/discount2.png') no-repeat 0 10px;
                    background-size:18px 18px;
                }
                &:nth-child(3){
                    background: url('../../../public/images/special2.png') no-repeat 0 10px;
                    background-size:18px 18px;
                }
            }
        }
        .scenery{
            .sceneryImgs{
                display: flex;
                justify-content: space-around;
                align-items: center;
                img{
                    width: 70px;
                    height:60px;
                    margin-bottom:10px;
                }
            }
        }
        .message{
            margin-bottom: 50px;
        }
    }
} 

</style>