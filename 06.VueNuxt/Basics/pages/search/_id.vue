<template>
    <div class="container">
        <h1>검색 결과</h1>
        <p><strong v-if="KEYWORD">"{{KEYWORD}}"</strong> 총 {{searchItem.length}}개의 상품이 검색되었습니다.</p>
        <NuxtMainItem :mainItem="this.searchItem" />
    </div>
</template>

<script>
import { fetchSearchItem } from '~/api'
import NuxtMainItem from '@/components/index/NuxtMainItem.vue';
export default {
    components:{
        NuxtMainItem
    },
    computed:{
        KEYWORD(){
            return this.$route.params.id
        }
    },
    async asyncData({ params , store}){
        const keyword = params.id
        if(keyword){
            const { data } = await fetchSearchItem(keyword)
            const searchItem = data.map(item=>({
                ...item,
                imageUrl:`${item.imageUrl}?random=${Math.random()}`
            }))
            return { searchItem }        
        }else{
            const searchItem = []
            // store.commit('OFF_LOADING')
            return { searchItem }
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/SearchPage';
</style>