<template>
    <div>
        <ul v-if="notes.length > 0">
            <NoteItem v-for="note in notes" :item="note" :key="note.id" />
        </ul>
        <div v-else class="btnWrap">
            <button class="xi-plus" @click="onClickCreate"></button>
        </div>
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
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
        NoteItem,
        NotePagination,
    },
    setup() {
        useLoading();
        const router = useRouter();
        const item = useItem();
        const { notes, totalItems } = storeToRefs(item);

        const onClickCreate = () => {
            router.push('/create');
        };

        return {
            notes,
            totalItems,
            onClickCreate,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
