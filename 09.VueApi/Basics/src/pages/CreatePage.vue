<template>
    <div>
        <h1>Create Page</h1>
        <NoteForm />
    </div>
</template>

<script>
import NoteForm from '@/components/form/NoteForm.vue';
export default {
    components: {
        NoteForm,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
    margin-bottom: 1rem;
}
</style>
