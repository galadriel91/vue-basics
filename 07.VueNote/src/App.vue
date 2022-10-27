<template>
    <div class="container">
        <NoteHeader />
        <RouterView />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteHeader from './components/common/NoteHeader.vue';
import NoteLoading from './components/common/NoteLoading.vue';

export default defineComponent({
    components: {
        NoteLoading,
        NoteHeader,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
