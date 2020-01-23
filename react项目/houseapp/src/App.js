import { HashRouter, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import Login from "./pages/login/login"
import 'antd-mobile/dist/antd-mobile.css'

import Reg from "./pages/reg/reg"
import Main from "./pages/main/main"
import First from "./pages/first/first"
import Mine from "./pages/mine/mine"
import Chat from "./pages/chat/chat"
import History from "./pages/history/history"
import Map from "./pages/main/map"
import City from "./pages/main/city"
 

export default class App extends Component {
   
    render() {
       
        return (
           

                <HashRouter>
                <Switch>
                <Route exact path="/" component={Login}> </Route>
                <Route path="/reg" component={Reg}> </Route> 
                <Route path="/main" component={Main}> </Route> 
                <Route path="/first" component={First}> </Route>
                <Route path="/mine" component={Mine}> </Route>
                <Route path="/chat" component={Chat}> </Route>
                <Route path="/histroy" component={History}> </Route>
                <Route path="/map" component={Map}> </Route>
                <Route path="/city" component={City}> </Route>

                </Switch>


                </HashRouter>
            
        )
    }
}

