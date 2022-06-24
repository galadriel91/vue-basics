<template>
    <header>
        <h1>{{HEADERNAME}}</h1>
        <!-- <button class="xi-plus" @click="onClickCreate" v-if="PAGENAME && NOTES.length"></button> -->
    </header>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
    setup(){
        const route = useRoute()
        const HEADERNAME = computed(()=>{
            const name = route.name
            if(name === 'main'){
                return 'Vue Vite Basic'
            }else if(name === 'create'){
                return 'Create Page'
            }else if(name === 'edit'){
                return 'Edit Page'
            }else if(name === 'POST'){
                return 'Post Page'
            }
        })
        return{ HEADERNAME }
    }
    // methods:{
    //     onClickCreate(){
    //         this.$router.push('/create')
    //     }
    // },
    // computed:{
    //     PAGENAME(){
    //         return this.$route.name === 'main'
    //     },
    //     NOTES(){
    //         return this.$store.state.notes
    //     },
    //     HEADERNAME(){
    //         const name = this.$route.name
    //         if(name === 'main'){
    //             return 'Vue Note Basic'
    //         }else if(name === 'create'){
    //             return 'Create Page'
    //         }else if(name === 'edit'){
    //             return 'Edit Page'
    //         }else if(name === 'POST'){
    //             return 'Post Page'
    //         }
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/common/NoteHeader';
</style>