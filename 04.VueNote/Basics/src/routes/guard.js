import { store } from 'Store/index'

export const getItemBeforePage = () => (to , from , next) => {
    store.commit('GET_NOTE_ITEM' , to.params.id)
    next()
}