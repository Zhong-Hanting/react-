<template>
  <div id="box">
    <div class="header">
      <div class="top">
        <div class="img">
          <img src="4.jpg" />
        </div>
        <div class="name">
          <h4 style="color:red;margin-right:5px;">品牌</h4>
          <h4>粥品香坊（大运村）</h4>
          <p>蜂鸟转送 / 38分钟送达</p>
          <p>
            <span style="color:red;">满</span> 在线支付满28减5,满50减10
          </p>
        </div>
        <div class="num">
          <div>5个 ></div>
        </div>
      </div>
      <div class="hfotter">
        <p>公告</p>
        <span>哇哇哇 超级好吃的粥你确定不来一份吗</span>
      </div>
    </div>
    <!-- 身体 -->
    <div class="main">
      <nav>
        <p>商品</p>
        <p>评价</p>
        <p>商家</p>
      </nav>
      <div class="nav">
        <ul>
          <li>热销</li>
          <li>单人特擦</li>
          <li>特色粥品</li>
          <li>精选热菜</li>
          <li>爽口凉菜</li>
          <li>半成品</li>
          <li>饭类</li>
          <li>面类</li>
        </ul>
        <div class="right">
          <div class="rtop">
            <h5>单人特色套餐</h5>
            <div class="about">
              <div class="photo">
                <img src=""/>图片
              </div>
              <div class="word">
                <h3>皮蛋瘦肉粥</h3>
                <p>咸粥</p>
                <p>月销1132份 好评率100%</p>
                <p>
                  <span style="color:red;">&yen;24</span> &yen;28
                </p>
              </div>
              <div class="add">
                 <div class="button">
                     <span class="none">-</span>1
                     <span>+</span>
                 </div>
              </div>
            </div>
          </div>
          <div class="rbottom">
               <h5>单人特色套餐</h5>
            <div class="about">
              <div class="photo">
                <img src=""/>图片
              </div>
              <div class="word">
                <h3>皮蛋瘦肉粥</h3>
                <p>咸粥</p>
                <p>月销1132份 好评率100%</p>
                <p>
                  <span style="color:red;">&yen;24</span> &yen;28
                </p>
              </div>
              <div class="add">
                 <div class="button">
                     <span class="none">-</span>1
                     <span>+</span>
                 </div>
              </div>
            </div>
            <!-- 第二个 -->
            <div class="about">
              <div class="photo">
                <img src=""/>图片
              </div>
              <div class="word">
                <h3>皮蛋瘦肉粥</h3>
                <p>咸粥</p>
                <p>月销1132份 好评率100%</p>
                <p>
                  <span style="color:red;">&yen;24</span> &yen;28
                </p>
              </div>
              <div class="add">
                 <div class="button">
                     <span class="none">-</span>1
                     <span>+</span>
                 </div>
              </div>
            </div>
            <!-- 第三个 -->
            <div class="about">
              <div class="photo">
                <img src=""/>图片
              </div>
              <div class="word">
                <h3>皮蛋瘦肉粥</h3>
                <p>咸粥</p>
                <p>月销1132份 好评率100%</p>
                <p>
                  <span style="color:red;">&yen;24</span> &yen;28
                </p>
              </div>
              <div class="add">
                 <div class="button">
                     <span class="none">-</span>1
                     <span>+</span>
                 </div>
              </div>
            </div>
            <!-- 这里复制结束 -->
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="fotter">
        <div class="fleft">
            <div class="car">
                <div class="photo"><img src="cart.jpg"></div>
                <h3>&yen;0</h3>
            </div>
            <p>另需配送费4元</p>
        </div>
        <div class="fright">
            &yen;20起送
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  lang="less">

.none{
    display:none !important;
}
#box {
  height: 100%; 
  display: flex;
  flex-direction: column;
  .header {
      background: rgba(0, 204, 255, 0.2);
    flex: 3;
    display: flex;
    flex-direction: column;
    .top {
      flex: 10;
      display: flex;
      justify-content: space-around;
      padding: 15px 5px;
      .img {
        flex: 3;
        img {
          width: 100%;
        }
      }
      .name {
        padding-left: 10px;
        flex: 7;
        line-height: 31px;
        h4 {
          display: inline-block;
        }
        p {
          font-size: 14px;
        }
      }
      .num {
        text-align: center;
        flex: 2;
        font-size: 12px;
        display: flex;
        flex-direction: column-reverse;

        div {
          border-radius: 10px;
          width: 100%;
          height: 30px;
          background: #fbfbfc;
          line-height: 28px;
        }
      }
    }
    .hfotter {
      flex: 2;
      background: #f6f6f6;
      padding: 5px;
      p {
        display: inline-block;
        width: 40px;
        background: #fff;
        font-weight: 600;
        margin-right: 30px;
      }
    }
  }

  // 中间
  .main {
    flex: 8;
    background: #fff;
    display: flex;
    flex-direction: column;
    nav {
      border-bottom: 1px solid #ccc;
      flex: 1;
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      line-height: 35px;
      p {
        display: inline-block;
      }
    }
    .nav {
      flex: 11;
      display: flex;
      ul {
        flex: 2;
        font-size: 14px;
        text-indent: 5px;
        line-height: 50px;
        li {
          list-style: none;
          height: 50px;
          border-bottom: 1px solid #ccc;
          background: #f6f6f6;
        }
      }
      .right {
        flex: 10;
        display: flex;
        flex-direction: column;
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
  }

  // 底部
  .fotter {
    flex: 1;
    display: flex;
    text-align: center;
    .fleft{
        flex:8;
        background:#87d0fa; display: flex;
        height:100%;
        
        .car{
            flex: 6;
            line-height:17px; 
            display: flex;
            justify-content: space-around;
            .photo{flex:6;
                          
                img{
                    width: 100%;
                     height: 90%;
                }
            }
            h3{
                display: inline-block;
                flex: 6;
            }
        }
        p{
            display:inline-block;
            flex: 6;
            line-height:45px; 

        }

    }
    .fright{
        flex: 4;
        background: #fff;
        line-height:45px; 
    }
  }
}
</style>