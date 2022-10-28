<template>
    <div class="container">
        <NoteHeader />
        <NoteSearch v-if="notes.length" />
        <NoteAlert v-if="showAlert"> {{ alertMessage }} </NoteAlert>
        <RouterView :key="$route.path" />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import NoteHeader from './components/common/NoteHeader.vue';
import NoteLoading from './components/common/NoteLoading.vue';
import NoteSearch from './components/common/NoteSearch.vue';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';
import NoteAlert from './components/common/NoteAlert.vue';

export default defineComponent({
    components: {
        NoteLoading,
        NoteHeader,
        NoteSearch,
        NoteAlert,
    },
    setup() {
        const item = useItem();
        const { currentPage, notes, alertMessage, showAlert } =
            storeToRefs(item);
        const { GET_NOTE } = item;
        watch(currentPage, () => {
            GET_NOTE();
        });
        return { notes, alertMessage, showAlert };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
