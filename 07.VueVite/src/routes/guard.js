import { store } from '@/store/index'

export const getItemBeforePage = () => (to , from , next) => {
    store.commit('GET_NOTE_ITEM' , to.params.id)
    next()
}