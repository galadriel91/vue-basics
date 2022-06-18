<template>
    <div class="itemWrap">
        <ul>
            <li v-for="item in mainItem" :key="item.id" @click="onClickPost(item.id)">
                <em><img :src="item.imageUrl" :alt="item.name" @load="onLoadImage"></em>
                <div>
                    <p>{{item.name}}</p>
                    <span>{{item.price}}$</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        mainItem:{
            type:Array,
            required:true
        }
    },

    data(){
        return{
            imageLoading:[]
        }
    },

    methods:{
        onClickPost(value){
            this.$router.push(`/post/${value}`)
        },
        onLoadImage(){
            this.imageLoading.push(true)
            if(this.imageLoading.length === this.mainItem.length){
                this.$store.commit('OFF_LOADING')
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/index/NuxtMainItem';
</style>