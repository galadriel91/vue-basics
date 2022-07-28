<template>
    <div>
        <ul>
            <li v-for="page in pages" :key="page">
                <RouterLink :class="{ active: page == currentPage }" to="/">{{
                    page
                }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import { useStore } from '@/store';
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

export default {
    setup() {
        const store = useStore();
        const { totalItem, limit, currentPage } = storeToRefs(store);
        const pages = computed(() => {
            return Math.ceil(totalItem.value / limit.value);
        });
        return { pages, currentPage };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NotePagi';
</style>
