<template>
    <ul>
        <li v-if="CURRENTPAGE !== 1"><a href="javascript:void(0);" @click="onClickPrev">이전</a></li>
        <li v-if="CURRENTPAGE !== TOTALPAGE"><a href="javascript:void(0);" @click="onClickNext">다음</a></li>
    </ul>  
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    setup(){
        const store = useStore()
        const TOTALPAGE = computed(()=>{
            return Math.ceil(store.state.notes.length / 3)
        })
        const CURRENTPAGE = computed(()=>{
            return store.state.currentPage
        })
        const onClickNext = () => {
            store.commit('NEXT_PAGE')
        }
        const onClickPrev = () => {
            store.commit('PREV_PAGE')
        }
        return{
            TOTALPAGE, CURRENTPAGE, onClickNext, onClickPrev
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/note/NotePagi';
</style>