<template>
    <div>
        <NoteEdit :item="edit" />
    </div>
</template>

<script>
import NoteEdit from '@/components/form/NoteEdit.vue';
import { onMounted } from 'vue';
import { useStore } from '@/store/index';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
export default {
    components: {
        NoteEdit,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const { edit } = storeToRefs(store);
        const { getEditNote } = store;
        onMounted(() => {
            getEditNote(route.params.id);
        });
        return {
            edit,
        };
    },
};
</script>

<style lang="scss" scoped></style>
