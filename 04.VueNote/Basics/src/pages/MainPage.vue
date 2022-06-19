<template>
    <div>
        <ul>
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
        </ul>
    </div>
</template>

<script>
import NoteItem from 'Components/note/NoteItem.vue';
export default {
    components:{
        NoteItem
    }
}
</script>

<style lang="scss" scoped>
    ul{
        padding: 0 0 2rem; border-radius: .5rem; 
    }
</style>