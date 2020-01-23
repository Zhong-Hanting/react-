import React, { Component } from 'react'
import { InputItem,Flex, WingBlank, WhiteSpace,Button} from 'antd-mobile';
import { Link } from 'react-router-dom'
import "./Login.scss"
import {login} from "../../api/api"


export default class Login extends Component {
    constructor(){
        super()
        this.state={
                user:"",
                pwd:"",
                olduser:"",
                oldpwd:""
        }
    }
    render() {
        let {user,pwd}=this.state
        return (
            <div className="box">
              <Flex justify="center">
              <img style={{width:300,height:300}} src={require("../../assets/images/1.png")} />
    </Flex>
   
    <WingBlank>
              <InputItem
    placeholder="请输入密码"
    value={user}
    onChange={(val=>{this.setState({user:val})})}
    clear>
    <div style={{ backgroundImage: `url(${require("../../assets/images/user.png")})`,
     backgroundSize: 'cover', height: '22px', width: '22px' }} />
  </InputItem>
          <InputItem
          type="password"
          value={pwd}
          onChange={(val=>{this.setState({pwd:val})})}
            placeholder="输入您的密码"
            clear>
            <div style={{ backgroundImage:`url(${require("../../assets/images/pwd.png")})`,
             backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
          
          <Button  onClick={this.btn} style={{background:"#07BCFC",color:"#fff"}}>登录</Button><WhiteSpace />
          <Flex justify="between">
          <Link to="/reg">手机注册</Link>
          <a href="http://www.baidu.com">忘记密码</a>
    </Flex>
    </WingBlank>
         
         
         
            </div>
        )
    }
    btn=async()=>{
            // 避免多次点击重复发请求思路
            // 设置空的动态数据  来存放每次输入的值  然后判断其是否相等   相等就return  
            let user=this.state.user   
            let pwd=this.state.pwd
            if(this.state.olduser===user&&this.state.oldpwd===pwd )return
            this.setState({
                olduser:user,
                oldpwd:pwd
            })

        login(this.state.user,this.state.pwd).then((res)=>{
            if(res.data=="ok"){
                alert("登录成功")
                window.location.href="#/first"
            }else{
                alert("登录失败")
            }
            console.log(res)
        })
    }
   
}
