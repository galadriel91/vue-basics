<template>
    <div>
        <NoteEdit :item="edit" />
    </div>
</template>

<script>
import NoteEdit from '@/components/form/NoteEdit.vue';
import { useStore } from '@/store/index';
import { storeToRefs } from 'pinia';
export default {
    components: {
        NoteEdit,
    },
    setup() {
        const store = useStore();
        const { edit } = storeToRefs(store);
        return {
            edit,
        };
    },
};
</script>

<style lang="scss" scoped></style>
