import { fetchListItem } from '@/api'

export default{
    async FETCH_LIST({commit} , payload){
        const { data } = await fetchListItem(payload);
        commit('ON_LOADING')
        commit('FETCH_LIST_ITEM' , data)
        return data
    }
}