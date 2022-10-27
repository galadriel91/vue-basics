<template>
    <div>
        <ul v-if="notes.length">
            <NoteItem v-for="note in notes" :key="note.id" :item="note" />
        </ul>
        <NotePagination v-if="parseInt(totalItems) > 3" />
    </div>
</template>

<script lang="ts">
import NotePagination from '@/components/note/NotePagination.vue';
import NoteItem from '@/components/note/NoteItem.vue';
import { defineComponent } from 'vue';
import { useLoading } from '@/composables/useLoading';
import { useCommon } from '@/store/commonStore';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';
import {
    onBeforeRouteUpdate,
    type RouteLocationNormalizedLoaded,
} from 'vue-router';

export default defineComponent({
    components: {
        NoteItem,
        NotePagination,
    },
    setup() {
        const common = useCommon();
        const item = useItem();
        const { notes, totalItems } = storeToRefs(item);
        const { GET_NOTE, SET_KEYWORD } = item;
        const { ON_LOADING } = common;
        useLoading();

        onBeforeRouteUpdate(async (to: RouteLocationNormalizedLoaded) => {
            ON_LOADING();
            SET_KEYWORD(to.params.keyword as string);
            await GET_NOTE();
        });

        return {
            notes,
            totalItems,
        };
    },
});
</script>
