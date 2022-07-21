<template>
    <header>
        <!-- <h1>Vue Note</h1> -->
        <!-- <button
            class="xi-plus"
            @click="onClickCreate"
            v-if="PAGENAME && NOTES.length"
        ></button> -->
    </header>
</template>

<script>
export default {
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
