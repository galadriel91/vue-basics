<template>
    <header>
        <h1>Vue Api Basics</h1>
        <button class="xi-plus" @click="onClickCreate"></button>
    </header>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const onClickCreate = () => {
            router.push('/create');
        };
        return {
            onClickCreate,
        };
    },
    // methods: {
    //     onClickCreate() {
    //         this.$router.push('/create');
    //     },
    // },
    // computed: {
    //     PAGENAME() {
    //         return this.$route.name === 'main';
    //     },
    //     NOTES() {
    //         return this.$store.state.notes;
    //     },
    //     HEADERNAME() {
    //         const name = this.$route.name;
    //         if (name === 'main') {
    //             return 'Vue Note Basic';
    //         } else if (name === 'create') {
    //             return 'Create Page';
    //         } else if (name === 'edit') {
    //             return 'Edit Page';
    //         } else if (name === 'POST') {
    //             return 'Post Page';
    //         }
    //     },
    // },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteHeader';
</style>
