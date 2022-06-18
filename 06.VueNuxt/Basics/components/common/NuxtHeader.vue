<template>
    <header>
        <div class="headerWrap">
            <h1><NuxtLink to="/">Vue Nuxt</NuxtLink></h1>
            <div>
                <!-- <NuxtSearchInput @input="onChangeValue" @submit="onSubmitSearch"/> -->
                <button class="xi-cart" @click="onClickCart"></button>
            </div>
        </div>
    </header>
</template>

<script>
// import NuxtSearchInput from '@/components/common/NuxtSearchInput.vue';
// import { fetchSearchItem } from '@/api/index'
export default {
    // components:{
    //     NuxtSearchInput
    // },

    // data(){
    //     return{
    //         value:''
    //     }
    // },

    // methods:{
    //     onClickCart(){
    //         this.$router.push('/cart')
    //     },

    //     onChangeValue(value){
    //         this.value = value
    //     },

    //     async onSubmitSearch(){
    //         this.$router.push(`/search/${this.value}`)
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/common/NuxtHeader';
</style>