<template>
    <header>
        <h1>{{HEADERNAME}}</h1>
        <button class="xi-plus" @click="onClickCreate" v-if="PAGENAME && NOTES.length"></button>
    </header>
</template>

<script>
export default {
    methods:{
        onClickCreate(){
            this.$router.push('/create')
        }
    },
    computed:{
        PAGENAME(){
            return this.$route.name === 'main'
        },
        NOTES(){
            return this.$store.state.notes
        },
        HEADERNAME(){
            const name = this.$route.name
            if(name === 'main'){
                return 'Vue Note Basic'
            }else if(name === 'create'){
                return 'Create Page'
            }else if(name === 'edit'){
                return 'Edit Page'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/common/NoteHeader';
</style>