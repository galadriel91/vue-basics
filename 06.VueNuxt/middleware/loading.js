export default function({store}){
    if(!store.state.isLoading){
        store.commit('ON_LOADING')
    }
}