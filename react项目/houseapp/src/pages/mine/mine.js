import React, { Component } from 'react'
import { List } from 'antd-mobile';
import '../mine/mine.scss'

const Item = List.Item;
export default class My extends Component {
    state={
      mylist: [
        { icon:require('../../assets/images/core.png') ,content:'我的积分' },
        {  icon:require('../../assets/images/dy.png') ,content:'我的订阅' },
        {  icon:require('../../assets/images/wl.png') ,content:'微聊联系人'}],
        mylistone: [
            { icon:require('../../assets/images/jsq.png') ,content:'房贷计算器' },
            {  icon:require('../../assets/images/fz.png') ,content:'我的房子' }],
            mylisttwo: [
                { icon:require('../../assets/images/kfjl.png') ,content:'我的看房记录' },
                {  icon:require('../../assets/images/wd.png') ,content:'我的问答' }],
                mylistthree: [
                    { icon:require('../../assets/images/sz.png') ,content:'设置' },
                    {  icon:require('../../assets/images/icon_chat_s.png') ,content:'意见反馈' }]
    }

    render() {
        return (<div>
          {/* 我的头部 */}
            <div className="myheader">
                <div className="top">
                    <div className="top_left">
                        <img src={require('../../assets/images/heade.jpg')}/>
                        <div className="top_text">
                            <h3>登陆/注册</h3>
                            <p>与经纪人发起聊天</p>
                        </div>
                    </div>
                    <img src={require('../../assets/images/set.png')} className="right"/>
                </div>
                <div className="bottom">
                    <div className="under line">
                        <p>0</p>
                        <div className="under_con">
                            <img src={require('../../assets/images/bag.png')}/>
                            <span>钱包</span>
                        </div>
                    </div>
                    <div className="under line">
                        <p>0</p>
                        <div className="under_con">
                            <img src={require('../../assets/images/preferential.png')}/>
                            <span>优惠</span>
                        </div>
                    </div>
                    <div className="under">
                        <p>0</p>
                        <div className="under_con">
                            <img src={require('../../assets/images/core.png')}/>
                            <span>积分</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* 我的内容部分 */}
            <div className='mymain'>
              <List>
                {
                  this.state.mylist.map((obj,i)=>
                  <Item key={i}
                      className='mylist'
                      thumb={obj.icon}
                      arrow="horizontal"
                      onClick={() => {}}
                    >{obj.content}</Item>                
                  )
                }
                    <div className='mylistone'>
                        {
                        this.state.mylistone.map((obj,i)=>
                                <Item key={i}
                                    thumb={obj.icon}
                                    arrow="horizontal"
                                    onClick={() => {}}
                                    >{obj.content}</Item>  
                                )
                            }
                    </div> 
                    <div className='mylisttwo'>
                        {
                        this.state.mylisttwo.map((obj,i)=>
                                <Item  key={i}
                                    thumb={obj.icon}
                                    arrow="horizontal"
                                    onClick={() => {}}
                                    >{obj.content}</Item>  
                                )
                            }
                    </div>        
                    <div className='mylistthree'>
                        {
                        this.state.mylistthree.map((obj,i)=>
                                <Item key={i}
                                    thumb={obj.icon}
                                    arrow="horizontal"
                                    onClick={() => {}}
                                    >{obj.content}</Item>  
                                )
                            }
                    </div>                     
              </List>
            </div>
        </div>
        )
    }
}