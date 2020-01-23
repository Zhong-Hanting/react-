import React, { Component } from 'react'
import {Grid ,Carousel,Flex} from 'antd-mobile';
import "./main.scss"
import {like} from "../../api/api"
import {ip} from "../../api/api"
import {connect} from "react-redux"



// const box=[
//   // 正式版
//   {icon:require("../../assets/images/money.png"),text:"新房"},
//   {icon:require("../../assets/images/money2.png"),text:"租房"},
//   {icon:require("../../assets/images/money3.png"),text:"装修"},
//   {icon:require("../../assets/images/money4.png"),text:"海外"},
// ]
const box=[
//   // 娱乐部
  {icon:require("../../assets/images/li.jpg"),text:"碧瑶"},
  {icon:require("../../assets/images/li1.jpg"),text:"碧瑶"},
  {icon:require("../../assets/images/li2.jpg"),text:"碧瑶"},
  {icon:require("../../assets/images/li3.jpg"),text:"碧瑶"},
]


const data =[
  // 娱乐版图
  {icon:require("../../assets/images/test8.jpg"),text:"赵丽颖"},
  {icon:require("../../assets/images/test.jpg"),text:"胭脂"},
  {icon:require("../../assets/images/test2.jpg"),text:"赵小刀"},
  {icon:require("../../assets/images/test3.jpg"),text:"碧瑶"},
  {icon:require("../../assets/images/test4.jpg"),text:"赵童鞋"},
  {icon:require("../../assets/images/test5.jpg"),text:"赵丽颖"},
  {icon:require("../../assets/images/test6.jpg"),text:"胭脂"},
   {icon:require("../../assets/images/test7.jpg"),text:"宋暖"},
] 
// const data =[
//   // 正式版图
//   {icon:require("../../assets/images/formal1.png"),text:"新房"},
//   {icon:require("../../assets/images/formal2.png"),text:"租房"},
//   {icon:require("../../assets/images/formal3png.png"),text:"装修"},
//   {icon:require("../../assets/images/formal4.png"),text:"海外"},
//   {icon:require("../../assets/images/formal5.png"),text:"商铺办公"},
//   {icon:require("../../assets/images/formal6.png"),text:"卖方"},
//   {icon:require("../../assets/images/formal7.png"),text:"二手房"},
//   {icon:require("../../assets/images/formal8.png"),text:"成交"},
// ] 


 class Main extends Component {
    constructor(){
        super()
        this.state={
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
            data: [
              {ims:require("../../assets/images/li.jfif")},
              {ims: require("../../assets/images/li1.jfif")},
              {ims:require("../../assets/images/li.jpg")}         
            ],
            imgHeight: 176,
            list:[],
            city:"定位中.."
        }
    }
    // https://p2.ssl.qhimgs1.com/sdr/400__/t013e79891c0af80e42.webp
    // https://p3.ssl.qhimgs1.com/sdr/400__/t01ae0e2db814a2a389.webp
    // https://p0.ssl.qhimgs1.com/sdr/400__/t01f56ddeebab4aef34.webp
    componentDidMount() {  
      // 地图
      let vm=this   //在里面用 会存在this指向问题 所以先用变量接住
      var citysearch = new window.AMap.CitySearch();   //window指向问题
    
      //自动获取用户IP，返回当前城市
      citysearch.getLocalCity(function(status, result){
          if (status === 'complete' && result.info === 'OK') {
              if (result && result.city && result.bounds) {
                  var cityinfo = result.city;
                  // var citybounds = result.bounds;    //经纬度
                  
                  vm.setState({
                    city:cityinfo
                  })

                  // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                  //地图显示当前城市
                  // map.setBounds(citybounds);
              }
          } else {
              // document.getElementById('info').innerHTML = result.info;
          }
      });
      

      // 可以预加载
      // setTimeout(() => {
      //   this.setState({
      //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      //   });
      // }, 1000);

      // 发列表请求
       like().then(data=>{
        console.log(data.data)
       this.setState({
         list:data.data
       })
       })
       
    }
    render() {
      let {list,city}=this.state
        return (
            <div className="main">
                <div className="main_top">
           <div className="city"  onClick={this.city}>{city}▼</div>
                <div className="white">
                  <img src={require("../../assets/images/search.png")}/>
                  <label>点击搜索</label>
                </div>
                <img onClick={this.map} src={require("../../assets/images/map.png")}/>            
      </div>
  
        <Carousel
        infinite={true}
          autoplay={true}
          
        >
          {this.state.data.map(val => (
           
              <img key={val}
              src={val.ims}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
          ))}
        </Carousel>
     
          <Grid data={data} hasLine={false} />
          <div className="middle">
            <div className="title">
              <h3 style= {{color:"#07BCFC"}}>房产全百科</h3>
              <h6>专业的买房攻略</h6>
              
              <Grid data={box} hasLine={false} />
              
                
            </div>

          </div>
      {/* 底部 */}
      <div className="fotter">
            <div className="title">
              <h3 style= {{color:"#07BCFC"}}>猜你喜欢</h3>
                {list.map((obj,i)=>{
                //  console.log(i)
                 return <div className="details" key={i} onClick={this.House.bind(this,obj)} >
                  <div>
                  <Flex>
                  <img src={ip+obj.imgs}/>
                  <div className="main_title">
                  <h3>{obj.name}</h3>
                  <p>{obj.area} {obj.range}</p>
       <p>{obj.type}&nbsp;&nbsp;{obj.point}</p>
                  </div>
                  </Flex>
                  </div>
      <h2 style={{color:"red"}}>{obj.price}/平</h2>
                 
                </div>
                
                }
                  
                
                )}

              {/* <div className="details">
                <div>
                <Flex>
                <img src={require("../../assets/images/build1.jpg")}/>
                <div>
                  <h3>绿地锦天府</h3>
                  <p>锦江区 攀成钢</p>
                  <p>4室2厅&nbsp;&nbsp;208平</p>
                </div>
                </Flex>
                </div>
                <h2 style={{color:"red"}}>19000/平</h2>
               
              </div> */}
             
     
    
                
            </div>

          </div>
             
                
            </div>
        )
    }
    House(houseobj){
     this.props.dispatch({
       type:"add_house",
       houseobj
     })
    }
    map=()=>{
     window.location.href="#/map"
    }
    city=()=>{
      window.location.href="#/city"
    }
    
    componentWillUnmount=()=>{       
      this.setState=(state,callback)=>{
        return
      }
        
      
    }
}
export default connect()(Main)