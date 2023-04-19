<template>
    <div>
        <ul>
            <li v-if="currentPage !== 1" @click="onChangePage(currentPage - 1)">
                <a href="javascript:void(0);">이전</a>
            </li>
            <li v-for="page in pages" :key="page">
                <a
                    :class="{ active: page === currentPage }"
                    @click="onChangePage(page)"
                    href="javascript:void(0);"
                    >{{ page }}</a
                >
            </li>
            <li
                v-if="currentPage !== pages"
                @click="onChangePage(currentPage + 1)"
            >
                <a href="javascript:void(0);">다음</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useItem } from '@/store/itemStore';

const item = useItem();

const { totalItems, limit, currentPage } = storeToRefs(item);
const { CHANGE_PAGE } = item;

const pages = computed(() => {
    return Math.ceil(parseInt(totalItems.value) / limit.value);
});

const onChangePage = (page: number) => {
    CHANGE_PAGE(page);
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NotePagi';
</style>
