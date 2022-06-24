<template>
    <div>
        <NoteHeader/>
        <RouterView/>
    </div>
</template>

<script>
    import NoteHeader from '@/components/common/NoteHeader.vue';
    export default {
        components:{
            NoteHeader
        }
    }
</script>

<style lang="scss">
    @import '@/assets/scss/index';
</style>