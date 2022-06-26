<template>
    <div>
        <NoteEdit :item="EDITNOTE"/>
    </div>
</template>

<script>
import NoteEdit from '@/components/form/NoteEdit.vue';
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    components:{
        NoteEdit
    },
    setup(){
        const store = useStore()
        const EDITNOTE = computed(()=>{
            return store.state.editItem
        })
        return{
            EDITNOTE
        }
    },
}
</script>

<style>

</style>