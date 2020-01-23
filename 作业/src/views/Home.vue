<template>
  <div id="bigbox">
    <div id="title">
      <label>每日特价></label>
      <div class="name">
        <ul>
          <li @mouseover="toch(1)" :class="{colo:num===1}">精选</li>
          <li @mouseover="toch(2)" :class="{colo:num===2}">数码</li>
          <li @mouseover="toch(3)" :class="{colo:num===3}">家装</li>
          <li @mouseover="toch(4)" :class="{colo:num===4}">预告</li>
          <li @mouseover="toch(5)" :class="{colo:num===5}">男装</li>
        </ul>
      </div>
    </div>

    <div class="main">
      <div id="left">
        <div>
          <img :src="first.left.img" />
        </div>
        <div class="word">
          <p>{{first.left.title}}</p>
          <p>&yen;{{first.left.price}}</p>
          <h6>{{first.left.hot}}</h6>
        </div>
      </div>
      <div id="right">
        <div class="rtop">
          <div class="rtleft">
            <div class="photo">
              <img :src="first.left.img" />
            </div>
            <div class="price">
              <p>{{first.left.title}}</p>
              <p>
                &yen;{{first.left.price}}
                <del>&yen;29</del>
              </p>
              <h6>{{first.left.hot}}</h6>
            </div>
          </div>
          <div class="rtright">
            <div class="photo">
              <img :src="first.left.img" />
            </div>
            <div class="price">
              <p>{{first.left.title}}</p>
              <p>
                &yen;{{first.left.price}}
                <del>&yen;29</del>
              </p>
              <h6>{{first.left.hot}}</h6>
            </div>
          </div>
        </div>
        <div class="rfotter">
          <div class="rtleft">
           <div class="photo">
              <img :src="first.left.img" />
            </div>
            <div class="price">
              <p>{{first.left.title}}</p>
              <p>
                &yen;{{first.left.price}}
                <del>&yen;29</del>
              </p>
              <h6>{{first.left.hot}}</h6>
            </div>
          </div>
          <div class="rtright">
           <div class="photo">
              <img :src="first.left.img" />
            </div>
            <div class="price">
              <p>{{first.left.title}}</p>
              <p>
                &yen;{{first.left.price}}
                <del>&yen;29</del>
              </p>
              <h6>{{first.left.hot}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      first:{
        left: {
          img: "3.jpg",
          title: "非常小屋 小户型布艺沙发",
          price: "258",
          hot: "热卖中"
        },
        right: [
          {
            img: "3.jpg",
            title: "1 小户型布艺沙发",
            price: "9",
            hot: "抢购中"
          },
          {
            img: "3.jpg",
            title: "2 小户型布艺沙发",
            price: "10",
            hot: "抢购中"
          },
          {
            img: "3.jpg",
            title: "3 小户型布艺沙发",
            price: "12",
            hot: "抢购中"
          },
          {
            img: "3.jpg",
            title: "4 小户型布艺沙发",
            price: "14",
            hot: "抢购中"
          }
        ]
      },
      // first1: {
      //   left: {
      //     img: "1.jpg",
      //     title: "非常小屋 小户型布艺沙发",
      //     price: "258",
      //     hot: "热卖中"
      //   },
      //   right: [
      //     {
      //       img: "1.jpg",
      //       title: "1 小户型布艺沙发",
      //       price: "9",
      //       hot: "抢购中"
      //     },
      //     {
      //       img: "1.jpg",
      //       title: "2 小户型布艺沙发",
      //       price: "10",
      //       hot: "抢购中"
      //     },
      //     {
      //       img: "1.jpg",
      //       title: "3 小户型布艺沙发",
      //       price: "12",
      //       hot: "抢购中"
      //     },
      //     {
      //       img: "1.jpg",
      //       title: "4 小户型布艺沙发",
      //       price: "14",
      //       hot: "抢购中"
      //     }
      //   ]
      // }
    }
  },
  methods: {
    toch(every) {
      this.num = every;
      var vm = this;
      if (every == 2) {
        vm.first = {
          left: {
            img: "2.jpg",
            title: "超级好看的颖子啊",
            price: "无价",
            hot: "好看"
          },
          right: [
            {
              img: "2.jpg",
            title: "超级好看的颖子啊",
            price: "无价",
            hot: "好看"
            },
            {
              img: "2.jpg",
            title: "超级好看的颖子啊",
            price: "无价",
            hot: "好看"
            },
            {
              img: "2.jpg",
            title: "超级好看的颖子啊",
            price: "无价",
            hot: "好看"
            },
            {
              img: "2.jpg",
            title: "超级好看的颖子啊",
            price: "无价",
            hot: "好看"
            }
          ]
        };
      }else if(every==3){
         vm.first = {
          left: {
            img: "1.jpg",
            title: "人美声甜的主",
            price: "无价",
            hot: "awsl"
          },
          right: [
            {
               img: "1.jpg",
            title: "人美声甜的主",
            price: "无价",
            hot: "awsl"
            },
            {
               img: "1.jpg",
            title: "人美声甜的主",
            price: "无价",
            hot: "awsl"
            },
            {
               img: "1.jpg",
            title: "人美声甜的主",
            price: "无价",
            hot: "awsl"
            },
            {
               img: "1.jpg",
            title: "人美声甜的主",
            price: "无价",
            hot: "awsl"
            }
          ]
        };
      }else if(every==4){
         vm.first = {
          left: {
            img: "2.jpg",
            title: "非常可爱之赵同学",
            price: "无价",
            hot: "巨漂酿"
          },
          right: [
            {
               img: "2.jpg",
            title: "非常可爱之赵同学",
            price: "无价",
            hot: "巨漂酿"
            },
            {
               img: "2.jpg",
            title: "非常可爱之赵同学",
            price: "无价",
            hot: "巨漂酿"
            },
            {
               img: "2.jpg",
            title: "非常可爱之赵同学",
            price: "无价",
            hot: "巨漂酿"
            },
            {
               img: "2.jpg",
            title: "非常可爱之赵同学",
            price: "无价",
            hot: "巨漂酿"
            }
          ]
        };
      }else if(every==5){
           vm.first = {
          left: {
            img: "1.jpg",
            title: "啊啊啊啊啊",
            price: "无价",
            hot: "啊啊啊"
          },
          right: [
            {
             img: "1.jpg",
            title: "啊啊啊啊啊",
            price: "无价",
            hot: "啊啊啊"
            },
            {
              img: "1.jpg",
            title: "啊啊啊啊啊",
            price: "无价",
            hot: "啊啊啊"
            },
            {
              img: "1.jpg",
            title: "啊啊啊啊啊",
            price: "无价",
            hot: "啊啊啊"
            },
            {
              img: "1.jpg",
            title: "啊啊啊啊啊",
            price: "无价",
            hot: "啊啊啊"
            }
          ]
        };
      }else{
          vm.first={
        left: {
          img: "3.jpg",
          title: "非常小屋 小户型布艺沙发",
          price: "258",
          hot: "热卖中"
        },
        right: [
          {
            img: "3.jpg",
            title: "1 小户型布艺沙发",
            price: "9",
            hot: "抢购中"
          },
          {
            img: "3.jpg",
            title: "2 小户型布艺沙发",
            price: "10",
            hot: "抢购中"
          },
          {
            img: "3.jpg",
            title: "3 小户型布艺沙发",
            price: "12",
            hot: "抢购中"
          },
          {
            img: "3.jpg",
            title: "4 小户型布艺沙发",
            price: "14",
            hot: "抢购中"
          }
        ]
      }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.colo {
  color: red !important;
  border-bottom: 2px solid red;
}
#bigbox {
  padding: 10px;
  width: 1000px;
  border: 2px solid #ccc;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  #title {
    text-align: center;
    margin-top: 30px;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .name {
      li {
        float: left;
        list-style: none;
        padding: 0 20px;
      }
    }
  }
  .main {
    display: flex;
    flex: 1;
    flex-direction: row;
    #left {
      flex: 4;
      background: #ccc;
      text-align: center;
      padding-top: 20px;
    }
    #right {
      flex: 8;
      display: flex;
      flex-direction: column;

      .rtop {
        color: aqua;
        flex: 6;
        display: flex;
        flex-direction: row;
        .rtleft {
          display: flex;
          flex-direction: row;
          flex: 6;
          .photo {
            flex: 6;
            img {
              width: 100%;
            }
          }
          .price {
            flex: 6;
          }
        }
        .rtright {
          color: red;
          display: flex;
          flex-direction: row;
          flex: 6;
          .photo {
            flex: 6;
            img {
              width: 100%;
            }
          }
          .price {
            flex: 6;
          }
        }
      }
      .rfotter {
        color:greenyellow;
        flex: 6;
        display: flex;
        flex-direction: row;
        .rtleft {
          display: flex;
          flex-direction: row;
          flex: 6;
          .photo {
            flex: 6;
            img {
              width: 100%;
            }
          }
          .price {
            flex: 6;
          }
        }
        .rtright {
          color: pink;
          display: flex;
          flex-direction: row;
          flex: 6;
          .photo {
            flex: 6;
            img {
              width: 100%;
            }
          }
          .price {
            flex: 6;
          }
        }
      }
    }
  }
}
</style>
