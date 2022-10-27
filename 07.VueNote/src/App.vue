<template>
    <div class="container">
        <NoteHeader />
        <NoteSearch />
        <RouterView :key="$route.path" />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteHeader from './components/common/NoteHeader.vue';
import NoteLoading from './components/common/NoteLoading.vue';
import NoteSearch from './components/common/NoteSearch.vue';

export default defineComponent({
    components: {
        NoteLoading,
        NoteHeader,
        NoteSearch,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
