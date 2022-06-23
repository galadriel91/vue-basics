<template>
    <ul>
        <li v-if="CURRENTPAGE !== 1"><a href="javascript:void(0);" @click="onClickGetItem(CURRENTPAGE - 1)">이전</a></li>
        <li v-for="page in TOTALPAGE" :key="page">
            <a href='javascript:void(0);' :class="{active:page == CURRENTPAGE}" @click="onClickGetItem(page)">{{page}}</a>
        </li>
        <li v-if="CURRENTPAGE !== TOTALPAGE"><a href="javascript:void(0);" @click="onClickGetItem(CURRENTPAGE + 1)">다음</a></li>
    </ul>  
</template>

<script>
export default {
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