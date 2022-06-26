<template>
    <div>
        <NoteHeader/>
        <div class="container">
            <RouterView/>
        </div>
    </div>
</template>

<script>
    import { onMounted } from 'vue'
    import { useStore } from 'vuex'
    import NoteHeader from '@/components/common/NoteHeader.vue';
    export default {
        components:{
            NoteHeader
        },
        setup(){
            const store = useStore()
            onMounted(()=>{
                store.commit('GET_NOTE')
            })
        }
    }
</script>


<style lang="scss">
    @import '@/assets/scss/index';
</style>