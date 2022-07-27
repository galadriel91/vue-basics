<template>
    <div>
        <NotePost :item="edit" />
    </div>
</template>

<script>
import NotePost from '@/components/item/NotePost.vue';
import { storeToRefs } from 'pinia';
import { useStore } from '../store';
import { useLoading } from '@/composables/useLoading';
export default {
    components: {
        NotePost,
    },
    setup() {
        const store = useStore();
        const { edit } = storeToRefs(store);
        useLoading();
        return {
            edit,
        };
    },
    computed: {
        EDITNOTE() {
            return this.$store.state.editItem;
        },
    },
};
</script>

<style></style>
