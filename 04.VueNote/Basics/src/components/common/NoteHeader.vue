<template>
    <header>
        <h1>Vue Note Basic</h1>
        <button class="xi-plus" @click="onClickCreate" v-if="PAGENAME"></button>
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
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/common/NoteHeader';
</style>