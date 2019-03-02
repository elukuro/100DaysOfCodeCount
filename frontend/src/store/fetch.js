
import http from '../service/http'

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
            http.request('http://localhost/API/index.php?username='+payload).then(response=>{
                commit('fetchNewData',response)
            })
        }
    },
    mutations:{
        fetchNewData(state,payload){
            state.data=payload
        }
    }
}