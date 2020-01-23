import React, { Component } from 'react'
import {TabBar} from 'antd-mobile';
import Main from "../main/main"
import Chat from "../chat/chat"
import History from "../history/history"
import Mine from "../mine/mine"


export default class First extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'main',
        hidden: false,
        fullScreen: false,
        list:[
        {title:"首页",img:"index.png",simg:"index-s.png",name:"main"},
        {title:"聊天",img:"chat.png",simg:"chat-s.png",name:"chat"},
        {title:"足迹",simg:"history.png",img:"history-s.png",name:"histroy"},
        {title:"我的",img:"mine.png",simg:"mine-s.png",name:"mine"}
        ]
      };
    }
  
    renderContent() {
      switch(this.state.selectedTab){
        case"main": return <Main></Main>
        case"chat": return <Chat></Chat>
        case"mine": return <Mine></Mine>
        case"histroy": return <History></History>
      }
     
    
    }
  
    render() {
      let {list}=this.state
      return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0} }>
          <TabBar
            unselectedTintColor="#949494"    
            tintColor="#33A3F4"           
            barTintColor="white"
          >
            {list.map( obj=>  <TabBar.Item
              title={obj.title}
              key={obj}
              icon={<div style={{
                width: '22px',
                height: '22px',
                
                background: `url(${require("../../assets/images/"+obj.img+"")}) center center /  21px 21px no-repeat` }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${require("../../assets/images/"+obj.simg+"")}) center center /  21px 21px no-repeat` }}
              />
              }
              selected={this.state.selectedTab === obj.name}
             
              onPress={() => {
                this.setState({
                  selectedTab: obj.name,
                });
              }}
              data-seed="logId"
            >
              {this.renderContent(obj.name)}
            </TabBar.Item>)}
           
           
           
          </TabBar>
        </div>
      );
    }
}
