
import http from '../service/http'
const URL="http://localhost/API/index.php?username="
export default {
    namespaced:true,
    state:{
        hello:'hello',
        data:{}
    },
    getters:{
        getData(state){
            return state.data
        }
    },
    actions:{
        fetchData({state,commit},payload){
            http.request(URL+payload).then(response=>{
                if(typeof response ==='object'){
                    commit('fetchNewData',response)
                }else{
                    response="false"
                    commit('fetchNewData',response)
                }
                
            })
        }
    },
    mutations:{
        fetchNewData(state,payload){
            state.data=payload
        }
    }
}