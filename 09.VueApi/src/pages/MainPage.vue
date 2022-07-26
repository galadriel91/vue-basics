<template>
    <div>
        <ul>
            <!-- <NoteItem v-for="note in notes" :key="note.id" :item="note" /> -->
        </ul>
    </div>
</template>

<script>
import { useStore } from '@/store';
import { onMounted } from 'vue';
export default {
    setup() {
        const store = useStore();
        const { getNote } = store;
        onMounted(() => {
            getNote();
        });
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
