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
}
</script>

<style>

</style>