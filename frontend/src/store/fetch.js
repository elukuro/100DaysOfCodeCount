
import http from '../service/http'
//const URL="http://goheru.com/100daysofcode/index.php?username="
const URL="http://localhost/API/index.php?username="
export default {
    namespaced:true,
    state:{
        data:{},

    },
    getters:{
        getData(state){
            return state.data
        },
        getCurrentMonth(){
            const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
            let now= new Date()
            let dataReturn={}
            dataReturn.monthName=monthNames[now.getMonth()]
            dataReturn.monthCount=now.getMonth()
            dataReturn.monthLength=new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
            return dataReturn
        },
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
        },
    }
}