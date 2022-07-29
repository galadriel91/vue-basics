<template>
    <div>
        <ul v-if="notes.length">
            <NoteItem v-for="note in notes" :key="note.id" :item="note" />
        </ul>
        <div class="btnWrap" v-else>
            <button class="xi-plus" @click="onClickCreate"></button>
        </div>
        <NotePagi v-if="totalItem > 3" />
    </div>
</template>

<script>
import NoteItem from '@/components/note/NoteItem.vue';
import NotePagi from '@/components/note/NotePagi.vue';
import { useLoading } from '@/composables/useLoading';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
export default {
    components: {
        NoteItem,
        NotePagi,
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const { notes, totalItem } = storeToRefs(store);
        useLoading();
        const onClickCreate = () => {
            router.push('/create');
        };
        return {
            notes,
            onClickCreate,
            totalItem,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
