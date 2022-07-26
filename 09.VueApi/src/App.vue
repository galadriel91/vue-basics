<template>
    <div class="container">
        <NoteHeader />
        <RouterView />
        <NoteLoading />
    </div>
</template>

<script>
import NoteHeader from '@/components/common/NoteHeader.vue';
import NoteLoading from '@/components/common/NoteLoading.vue';
export default {
    components: {
        NoteLoading,
        NoteHeader,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
