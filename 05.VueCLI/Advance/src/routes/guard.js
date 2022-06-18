import { store } from '@/store/index'

export const getPage = () => (to , from , next) => {
    store.commit('ON_LOADING')
    store.dispatch('FETCH_LIST' , to.name)
    .then(()=>{
        next()
    })
}

export const getParamsPage = () => (to , from , next) => {
    store.commit('ON_LOADING')
    store.dispatch(`FETCH_${to.name}` , to.params.id)
    .then(()=>{
        next()
    })
}