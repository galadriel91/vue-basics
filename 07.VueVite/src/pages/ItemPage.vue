<template>
    <div>
        <NotePost :item="EDITNOTE"/>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import NotePost from '@/components/item/NotePost.vue';
export default {
    components:{
        NotePost
    },
    setup(){
        const store = useStore()
        const EDITNOTE = computed(()=>{
            return store.state.editItem
        })
        return{
            EDITNOTE
        }
    }
}
</script>

<style>

</style>