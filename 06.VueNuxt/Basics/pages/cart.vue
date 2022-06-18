<template>
    <div class="container">
        <h1>장바구니 페이지</h1>
        <NuxtCartItem/>
    </div>
</template>

<script>
import NuxtCartItem from '@/components/cart/NuxtCartItem.vue';
export default {
    components:{
        NuxtCartItem
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/CartPage';
</style>