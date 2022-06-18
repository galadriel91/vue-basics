<template>
    <ul>
        <li v-for="item in cartItem" :key="item.id">
            <img :src="item.imageUrl" :alt="item.name" @load="onLoadImage">
            <div>
                <p>{{item.name}}</p>
                <span>{{item.price}}$</span>
            </div>
        </li>
    </ul>
</template>

<script>
import { fetchCartsItem } from '@/api/index'
export default {

    data(){
        return{
            cartItem : [],
            imageLoading:[]
        }
    },

    async fetch(){
        const { data } = await fetchCartsItem()
        const item = data.map(item=>({
            ...item,
            imageUrl:`${item.imageUrl}?random=${Math.random()}`
        }))
        this.cartItem = item
    },

    methods:{
        onLoadImage(){
            this.imageLoading.push(true)
            if(this.imageLoading.length === this.cartItem.length){
                this.$store.commit('OFF_LOADING')
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/cart/NuxtCartItem';
</style>