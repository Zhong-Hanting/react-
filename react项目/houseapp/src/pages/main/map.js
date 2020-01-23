import React, { Component } from 'react'

export default class map extends Component {
    
    render() {
        return (
            <div>
                <div id="map" style={ {height:800,width:370}}> </div>
            </div>
        )
    }
    componentDidMount(){
        var map = new window.AMap.Map("map", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    // var cityinfo = result.city;
                    var citybounds = result.bounds;
                    // document.getElementById('map').innerHTML = '您当前所在城市：'+cityinfo;
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('map').innerHTML = result.info;
            }
        });
    }
}
