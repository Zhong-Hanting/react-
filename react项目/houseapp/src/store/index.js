import {createStore} from "redux"


export default createStore((state=[],action)=>{
    switch(action.type){
        case "add_house" :return [...new Set([action.houseobj,...state])]
        default :return state
    }
})

