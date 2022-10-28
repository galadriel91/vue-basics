<template>
    <div class="container">
        <NoteHeader />
        <NoteSearch v-if="notes.length" />
        <RouterView :key="$route.path" />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import NoteHeader from './components/common/NoteHeader.vue';
import NoteLoading from './components/common/NoteLoading.vue';
import NoteSearch from './components/common/NoteSearch.vue';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        NoteLoading,
        NoteHeader,
        NoteSearch,
    },
    setup() {
        const item = useItem();
        const { currentPage, notes } = storeToRefs(item);
        const { GET_NOTE } = item;
        watch(currentPage, () => {
            GET_NOTE();
        });
        return { notes };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
