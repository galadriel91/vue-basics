<template>
    <div>
        <ul v-if="NOTES.length">
            <NoteItem v-for="note in NOTES.slice(0 + INDEX, 3 + INDEX)" :key="note.id" :item="note"/>
        </ul>
        <div class="btnWrap" v-else>
            <button class="xi-plus" @click="onClickCreate"></button>
        </div>
        <NotePagi/>
    </div>
</template>

<script>
import NoteItem from 'Components/note/NoteItem.vue';
import NotePagi from 'Components/note/NotePagi.vue';
export default {
    components:{
        NoteItem,
        NotePagi
    },
    computed:{
        NOTES(){
            return this.$store.state.notes
        },
        INDEX(){
            return this.$store.state.pageIndex
        }
    },
    methods:{
        onClickCreate(){
            this.$router.push('/create')
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/pages/MainPage';
</style>