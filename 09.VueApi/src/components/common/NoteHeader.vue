<template>
    <header>
        <h1>{{ headerName }}</h1>
        <button class="xi-plus" @click="onClickCreate"></button>
    </header>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
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
            }
        });
        const onClickCreate = () => {
            router.push('/create');
        };
        return {
            onClickCreate,
            headerName,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteHeader';
</style>
