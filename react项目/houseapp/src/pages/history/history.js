import React, { Component } from 'react'
import {Flex} from 'antd-mobile';
import { connect} from "react-redux"
import {ip} from "../../api/api"

 class History extends Component {
    render() {
        console.log(this)
        return (
            <div>
                  {this.props.state.map((obj,i)=>{
                //  console.log(i)
                 return <div className="details" key={i} >
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
            </div>
        )
    }
}
export default connect((state)=>{
    return {state}
})(History)
