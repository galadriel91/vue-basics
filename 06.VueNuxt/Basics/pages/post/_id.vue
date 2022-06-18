<template>
    <div class="container">
        <h1>상세 페이지</h1>
        <NuxtPostItem :postItem="postItem"/>
    </div>
</template>

<script>
import { fetchPostItem } from '@/api/index'
import NuxtPostItem from '@/components/post/NuxtPostItem.vue';
export default {

    components:{
        NuxtPostItem
    },

    async asyncData({params}){
        const { data } = await fetchPostItem(params.id);
        const postItem = data
        return { postItem }
    },
    
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/PostPage';
</style>