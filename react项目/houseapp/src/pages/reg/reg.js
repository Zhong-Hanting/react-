import React, { Component } from 'react'
import { InputItem,Flex, WingBlank, WhiteSpace,Button,Checkbox} from 'antd-mobile';
import {code,reg} from "../../api/api"     //调axios函数 要解构

import "./reg.scss"

import { Link } from 'react-router-dom'
const AgreeItem=Checkbox.AgreeItem

export default class Reg extends Component {
    constructor(){
        super()
        this.state={
            user:"",
            pwd:"",
            mycode:""
        }
    }
    render() {
        let {user,pwd,mycode}=this.state
        return (
            <div className="box">
                   <Flex justify="center">
              <img style={{width:300,height:300}} src={require("../../assets/images/1.png")} />
    </Flex>
    <WingBlank size="lg">
                   <InputItem
    placeholder="请输入您的号码"
    value={user}
    type="phone"
    onChange={(val=>{this.setState({user:val})})}
    clear>
    <div style={{ backgroundImage: `url(${require("../../assets/images/phone.png")})`,
     backgroundSize: 'cover', height: '22px', width: '22px' }} />
  </InputItem>
  
  <InputItem
    placeholder="请输入您的密码"
    value={pwd}
    onChange={(val=>{this.setState({pwd:val})})}
    clear>
    <div style={{ backgroundImage: `url(${require("../../assets/images/pwd.png")})`,
     backgroundSize: 'cover', height: '22px', width: '22px'}} />
  </InputItem>
  <div className="code">
  <InputItem placeholder="验证码" clear  extra="获取验证码" onExtraClick={this.mycode} >
     {mycode}
  </InputItem>
  </div>
  <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                            <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>
                                <label style={{color:"red" ,fontSize:14}}>我已同意</label>
                                <span style={{color:"#07BCFC",fontSize:14}}>《用户注册协议》及《隐私权政策》</span></a>
                    </AgreeItem>

  <Button  onClick={this.regbtn}style={{background:"#07BCFC",color:"#fff"}}>注册</Button><WhiteSpace />
  <Link to="/">已有账号！前往登录</Link>
  </WingBlank>
            
            </div>
        )
    }
    
    mycode=async()=>{
        let data=await code()
       this.setState({
           mycode:data.data
       })
    console.log(data)
    }
    regbtn=async()=>{
        
        let res=await reg(this.state.user,this.state.pwd)
        console.log(res)
        if(res.statusText=="OK"){
            alert("恭喜注册成功")
        }else{
            alert("注册失败")

        }
    }
}
