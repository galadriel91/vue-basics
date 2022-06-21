<template>
    <div>
        <ul>
            <NoteItem v-for="note in NOTES" :key="note.id" :item="note"/>
        </ul>
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
        }
    }
}
</script>

<style lang="scss" scoped>
    ul{
        padding: 0 0 2rem; border-radius: .5rem; 
    }
</style>