<template>
    <div>
        <NoteHeader/>
        <div class="container">
            <RouterView/>
        </div>
    </div>
</template>

<script>
    import NoteHeader from 'Components/common/NoteHeader.vue';
    export default {
        components:{
            NoteHeader
        }        
    }
</script>


NoteHeader<style lang="scss">
    @import 'Style/index';
</style>