<template>
    <div>
        <ul v-if="NOTES.length">
            <NoteItem v-for="note in NOTES" :key="note.id" :item="note"/>
        </ul>
        <div class="btnWrap" v-else>
            <button class="xi-plus" @click="onClickCreate"></button>
        </div>
    </div>
</template>

<script>
import NoteItem from 'Components/note/NoteItem.vue';
export default {
    components:{
        NoteItem
    },
    computed:{
        NOTES(){
            return this.$store.state.notes
        },
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