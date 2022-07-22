<template>
    <div>
        <NoteEdit :item="editItem" />
    </div>
</template>

<script>
import NoteEdit from '@/components/form/NoteEdit.vue';
import { onMounted } from 'vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
export default {
    components: {
        NoteEdit,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const { onGetEditItem } = store;
        const { editItem } = storeToRefs(store);
        onMounted(() => {
            onGetEditItem(route.params.id);
        });
        return {
            editItem,
        };
    },
};
</script>

<style lang="scss" scoped></style>
