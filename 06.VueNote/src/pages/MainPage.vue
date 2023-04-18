<template>
    <div>
        <ul v-if="notes.length > 0">
            <NoteItem v-for="note in notes" :item="note" :key="note.id" />
        </ul>
        <div class="btnWrap">
            <button class="xi-plus" @click="onClickCreate"></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useItem } from '@/store/itemStore';
import NoteItem from '@/components/note/NoteItem.vue';
import { storeToRefs } from 'pinia';

const item = useItem();
const { notes } = storeToRefs(item);
const { GET_NOTE } = item;
const router = useRouter();
const onClickCreate = () => {
    router.push('/create');
};
GET_NOTE();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
