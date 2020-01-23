import React, { Component } from 'react'
import "../chat/chat.scss"
import { WingBlank} from 'antd-mobile';

export default class chat extends Component {
    state={
        worker:"颖小妹"
    }
    render() {
        let {worker}=this.state
        return (
            <div className="chatbox">
                <WingBlank size="lg">
                <div className="content">
                  <img src={require("../../assets/images/heade.jpg")}/>
        <div>置业顾问:<p className="smallp">{worker}</p></div>  
        <p>专业服务诚信做人诚心做事</p>
        <button><h3>我要聊天</h3></button>
                </div>
                </WingBlank>
            </div>
        )
    }
}
