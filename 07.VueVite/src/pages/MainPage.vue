<template>
    <div>
        <ul v-if="NOTES.length">
            <NoteItem v-for="note in NOTES.slice(0 + INDEX , 3 + INDEX)" :key="note.id" :item="note"/>
        </ul>
        <div class="btnWrap" v-else>
            <button class="xi-plus" @click="onClickCreate"></button>
        </div>
        <NotePagi/>
    </div>
</template>

<script>
import NoteItem from '@/components/note/NoteItem.vue';
import NotePagi from '@/components/note/NotePagi.vue';
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    components:{
        NoteItem,
        NotePagi
    },
    setup(){
        const store = useStore()
        const router = useRouter()
        const NOTES = computed(()=>{
            return store.state.notes
        })
        const INDEX = computed(()=>{
            return store.state.pageIndex
        })
        const onClickCreate = () => {
            router.push('/create')
        }
        return{
            NOTES ,INDEX , onClickCreate
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/MainPage';
</style>