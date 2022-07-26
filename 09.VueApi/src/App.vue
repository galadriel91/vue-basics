<template>
    <div class="container">
        <RouterView />
        <NoteLoading />
    </div>
</template>

<script>
import NoteLoading from '@/components/common/NoteLoading.vue';
export default {
    components: {
        NoteLoading,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
