<template>
    <ul>
        <li v-if="CURRENTPAGE !== 1"><a href="javascript:void(0);" @click="onClickPrev">이전</a></li>
        <li v-if="CURRENTPAGE !== TOTALPAGE"><a href="javascript:void(0);" @click="onClickNext">다음</a></li>
    </ul>  
</template>

<script>
export default {
    methods:{
        onClickNext(){
            this.$store.commit('NEXT_PAGE')
        },
        onClickPrev(){
            this.$store.commit('PREV_PAGE')
        }
    },
    computed:{
        TOTALPAGE(){
            return Math.ceil(this.$store.state.notes.length / 3)
        },
        CURRENTPAGE(){
            return this.$store.state.currentPage
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/note/NotePagi';
</style>