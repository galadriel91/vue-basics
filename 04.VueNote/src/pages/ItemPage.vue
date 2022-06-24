<template>
    <div>
        <NotePost :item="EDITNOTE"/>
    </div>
</template>

<script>
import NotePost from 'Components/item/NotePost.vue';
export default {
    components:{
        NotePost
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