<template>
    <div>
        <ul v-if="notes.length">
            <NoteItem v-for="note in notes" :key="note.id" :item="note" />
        </ul>
        <div v-else class="resultWrap">
            <p>
                <span>{{ $route.params.keyword }}</span
                >에 대한 검색 결과가 없습니다.
            </p>
        </div>
        <NotePagination v-if="parseInt(totalItems) > 3" />
    </div>
</template>

<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { onBeforeUnmount } from 'vue';
import { useLoading } from '@/composables/useLoading';
import { useCommon } from '@/store/commonStore';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';
import { onBeforeRouteUpdate } from 'vue-router';
import NoteItem from '@/components/note/NoteItem.vue';
import NotePagination from '@/components/note/NotePagination.vue';

const common = useCommon();
const item = useItem();
const { notes, totalItems } = storeToRefs(item);
const { GET_NOTE, SET_KEYWORD } = item;
const { ON_LOADING, OFF_LOADING } = common;

useLoading();

onBeforeRouteUpdate(async (to: RouteLocationNormalizedLoaded) => {
    ON_LOADING();
    SET_KEYWORD(to.params.keyword as string);
    await GET_NOTE();
    OFF_LOADING();
});

onBeforeUnmount(() => {
    SET_KEYWORD('');
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/SearchPage';
</style>
