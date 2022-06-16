import { fetchNewsItem } from '@/api'

export default{
    async FETCH_NEWS({commit}){
        const { data } = await fetchNewsItem();
        commit('FETCH_NEWS_ITEM' , data)
        return data
    }
}