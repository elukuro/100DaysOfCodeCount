
import http from '../service/http'

export default {
    namespaced:true,
    state:{
        hello:'hello',
        data:{}
    },
    getters:{
        newState(state){
            return state.data
        }
    },
    actions:{
        fetchData({state,commit}){
            let data=http.request('http://localhost/API/index.php?username=heru_hartanto');
            console.log(data);
            commit('fetchNewData',data)
        }
    },
    mutations:{
        fetchNewData(state,payload){
            state.data=payload
        }
    }
}