<template>
    <div class="container">
        <NoteHeader />
        <NoteSearch />
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
        const { currentPage } = storeToRefs(item);
        const { GET_NOTE } = item;
        watch(currentPage, () => {
            GET_NOTE();
        });
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
