<template>
    <div class="container">
        <h1>상품 페이지</h1>
        <NuxtMainItem :mainItem="mainItem"/>
    </div>
</template>

<script>
import { fetchProductsItem } from '@/api/index'
import NuxtMainItem from '@/components/index/NuxtMainItem.vue';
export default {

    components:{
        NuxtMainItem
    },

    async asyncData(){
        const { data } = await fetchProductsItem();
        const mainItem = data.map(item=>({
            ...item,
            imageUrl:`${item.imageUrl}?random=${Math.random()}`
        }))
        return { mainItem }
    },

}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/IndexPage';
</style>