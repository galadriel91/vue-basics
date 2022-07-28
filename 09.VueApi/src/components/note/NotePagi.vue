<template>
    <div>
        <ul>
            <li
                v-if="currentPage !== 1"
                @click="onClickPage(currentPage - 1, searchValue)"
            >
                <a href="javascript:void(0);">이전</a>
            </li>
            <li
                v-for="page in pages"
                :key="page"
                @click="onClickPage(page, searchValue)"
            >
                <RouterLink :class="{ active: page == currentPage }" to="/">{{
                    page
                }}</RouterLink>
            </li>
            <li
                v-if="currentPage !== pages"
                @click="onClickPage(currentPage + 1, searchValue)"
            >
                <a href="javascript:void(0);">다음</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { useStore } from '@/store';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

export default {
    setup() {
        const store = useStore();
        const { totalItem, limit, currentPage, searchValue } =
            storeToRefs(store);
        const { getNote } = store;
        const pages = computed(() => {
            return Math.ceil(totalItem.value / limit.value);
        });
        const onClickPage = (page, search) => {
            getNote(page, search);
        };
        return { pages, currentPage, onClickPage, searchValue };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NotePagi';
</style>
