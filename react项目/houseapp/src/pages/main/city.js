import React, { Component } from 'react'
import list from "../../json/citylist.json"
import "./city.scss"
import BScroll from "better-scroll"
export default class city extends Component {
    render() {
        return (
            <div className="citybox" >
            
                <div id="city_list_box" style={{height:"100%"}}>
                <ul className="content">
                <label className="searchcity">选择城市</label>
               {list.map(obj=>
    <div className="city_title" id={obj.title}>
        <h4>{obj.title}</h4>
               {obj.child.map(val=><p className="city_child">{val}</p>)}
    </div>
                
                )}
                </ul>
                </div>
                <div className="name" onTouchMove={this.movecity.bind(this)}>
              {
                  list.map(val=>  
                 <h3 className="ulp" onClick={this.name_title.bind(this,val.title)}>{val.title}</h3>

                 )
              }
               </div>
            </div>
        )
    }
    name_title(name){
        this.leftBox.scrollToElement("#"+name,1000)

    }
    movecity(a){
        // 获取手指触屏对象
       console.log(a.touches[0].clientX, a.touches[0].clientY)
       let res=document.elementFromPoint(a.touches[0].clientX, a.touches[0].clientY)
       console.log(res.className)
        if(res.className=="ulp"){
            this.leftBox.scrollToElement("#"+res.innerHTML,1000)
        }
    }
    componentDidMount(){
        this.leftBox=new BScroll("#city_list_box")
    }
}
