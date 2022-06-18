export const state = () => ({
    isLoading : false
})

export const mutations = {
    ON_LOADING(state){
        state.isLoading = true
    },
    OFF_LOADING(state){
        state.isLoading = false
    }
}