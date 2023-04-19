<template>
    <div>
        <ul v-if="notes.length > 0">
            <NoteItem v-for="note in notes" :item="note" :key="note.id" />
        </ul>
        <div class="btnWrap" v-else>
            <button class="xi-plus" @click="onClickCreate"></button>
        </div>
        <NotePagination v-if="parseInt(totalItems) > 3" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';
import { useLoading } from '@/composables/useLoading';
import NoteItem from '@/components/note/NoteItem.vue';
import NotePagination from '@/components/note/NotePagination.vue';

const router = useRouter();
const item = useItem();
const { notes, totalItems } = storeToRefs(item);

const onClickCreate = () => {
    router.push('/create');
};

useLoading();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
