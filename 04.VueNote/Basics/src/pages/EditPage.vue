<template>
    <div>
        <NoteEdit :item="EDITNOTE"/>
    </div>
</template>

<script>
import NoteEdit from 'Components/form/NoteEdit.vue';
export default {
    components:{
        NoteEdit
    },
    computed:{
        EDITNOTE(){
            return this.$store.state.editItem
        }
    },
    mounted(){
        this.$store.commit('GET_NOTE_ITEM' , this.$route.params.id)
        // console.log(this.$route.params.id)
    },
}
</script>

<style>

</style>