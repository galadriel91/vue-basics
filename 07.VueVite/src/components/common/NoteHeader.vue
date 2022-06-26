<template>
    <header>
        <h1>{{HEADERNAME}}</h1>
        <button class="xi-plus" @click="onClickCreate" v-if="PAGENAME && NOTES.length"></button>
    </header>
</template>

<script>
import { computed } from 'vue'
import { useRoute , useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup(){
        const route = useRoute()
        const router = useRouter()
        const store = useStore()
        const onClickCreate = () => {
            router.push('/create')
        }
        const PAGENAME = computed(()=>{
            return route.name === 'main' 
        })
        const NOTES = computed(()=>{
            return store.state.notes
        })
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
        return{ HEADERNAME , PAGENAME , NOTES , onClickCreate }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/common/NoteHeader';
</style>