<template>
    <div class="itemWrap">
        <em>
            <img :src="postItem.imageUrl" :alt="postItem.name" @load="onLoadImage">
        </em>
        <div>
            <p>{{postItem.name}}</p>
            <span>{{postItem.price}}$</span>
            <button class="xi-cart" @click="onClickCartItem"></button>
        </div>
    </div>
</template>

<script>
import { addCartItem } from '@/api/index'

export default {
    props:{
        postItem:{
            type:Object,
            requied:true
        }
    },

    methods:{
        // onLoadImage(){
        //     this.$store.commit('OFF_LOADING')
        // },
        async onClickCartItem(){
            await addCartItem(this.postItem)
            this.$router.push('/cart')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/post/NuxtPostItem';
</style>