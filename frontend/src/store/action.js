export default {
    namespaced:true,
    state:{
        selectedTweet:{},
        show:true,
    },
    getters:{
        gettersSelectedTweet(state){
            return state.selectedTweet
        },
        gettersFlag(state){
            return state.show
        }
    },
    actions:{
        detailData({state,commit},payload){
            commit('detailData',payload)
        },
        closeModal({state,commit},payload){
            commit('closeModal',payload)
        }
    },
    mutations:{
        detailData(state,payload){
            state.selectedTweet=payload
            state.show=true
        },
        closeModal(state,payload){
            state.show=false
        }
    }
}