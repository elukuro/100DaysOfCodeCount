export default {
    namespaced:true,
    state:{
        selectedTweet:{}
    },
    getters:{
        gettersSelectedTweet(state){
            return state.selectedTweet
        }
    },
    actions:{
        detailData({state,commit},payload){
            commit('detailData',payload)
        }
    },
    mutations:{
        detailData(state,payload){
            state.selectedTweet=payload
        }
    }
}