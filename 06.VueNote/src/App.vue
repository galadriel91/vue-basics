<template>
    <div class="container">
        <NoteHeader />
        <NoteSearch />
        <RouterView />
        <NoteLoading />
    </div>
</template>

<script setup lang="ts">
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import NoteHeader from './components/common/NoteHeader.vue';
import NoteLoading from './components/common/NoteLoading.vue';
import NoteSearch from './components/common/NoteSearch.vue';

const item = useItem();
const { currentPage } = storeToRefs(item);
const { GET_NOTE } = item;
watch(currentPage, () => {
    GET_NOTE();
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
