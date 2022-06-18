import { fetchListItem , fetchUserItem , fetchPostItem} from '@/api'

export default{
    async FETCH_LIST({commit} , payload){
        const { data } = await fetchListItem(payload);
        commit('FETCH_LIST_ITEM' , data)
        return data
    },
    async FETCH_USER({commit} , payload){
        const { data } = await fetchUserItem(payload)
        commit('FETCH_USER_ITEM' , data)
        return data
    },
    async FETCH_POST({commit} , payload){
        const { data } = await fetchPostItem(payload)
        commit('FETCH_POST_ITEM' , data)
        return data
    }

}