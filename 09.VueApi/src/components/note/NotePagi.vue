<template>
    <div>
        <ul>
            <li
                v-if="currentPage !== 1"
                @click="onClickPage(currentPage - 1, keyword)"
            >
                <a href="javascript:void(0);">이전</a>
            </li>
            <li
                v-for="page in pages"
                :key="page"
                @click="onClickPage(page, keyword)"
            >
                <a
                    :class="{ active: page == currentPage, keyword }"
                    href="javascript:void(0);"
                    >{{ page }}</a
                >
            </li>
            <li
                v-if="currentPage !== pages"
                @click="onClickPage(currentPage + 1)"
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
    props: {
        keyword: {
            type: String,
            required: false,
        },
    },
    setup(props) {
        const store = useStore();
        const { totalItem, limit, currentPage } = storeToRefs(store);
        const { getNote } = store;
        const pages = computed(() => {
            return Math.ceil(totalItem.value / limit.value);
        });
        const onClickPage = (page, search) => {
            getNote(page, search);
        };
        return { pages, currentPage, onClickPage };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NotePagi';
</style>
