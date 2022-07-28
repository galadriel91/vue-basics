<template>
    <header>
        <h1>{{ headerName }}</h1>
        <button
            class="xi-plus"
            @click="onClickCreate"
            v-if="notes.length && !showBtns"
        ></button>
    </header>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        const { notes } = storeToRefs(store);
        const showBtns = computed(() => {
            const name = route.name;
            return name === 'create';
        });
        const headerName = computed(() => {
            const name = route.name;
            if (name === 'main') {
                return 'Vue Api Basic';
            } else if (name === 'create') {
                return 'Create Page';
            } else if (name === 'edit') {
                return 'Edit Page';
            } else if (name === 'POST') {
                return 'Post Page';
            } else if (name === 'search') {
                return 'Search Page';
            }
        });
        const onClickCreate = () => {
            router.push('/create');
        };
        return {
            notes,
            onClickCreate,
            headerName,
            showBtns,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteHeader';
</style>
