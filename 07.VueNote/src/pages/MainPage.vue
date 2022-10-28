<template>
    <div>
        <ul>
            <NoteItem v-for="note in notes" :item="note" :key="note.id" />
        </ul>
        <NotePagination v-if="parseInt(totalItems) > 3" />
    </div>
</template>

<script lang="ts">
import NotePagination from '../components/note/NotePagination.vue';
import NoteItem from '../components/note/NoteItem.vue';
import { useLoading } from '@/composables/useLoading';
import { useItem } from '@/store/itemStore';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        NoteItem,
        NotePagination,
    },
    setup() {
        useLoading();
        const item = useItem();
        const { notes, totalItems } = storeToRefs(item);

        return {
            notes,
            totalItems,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
