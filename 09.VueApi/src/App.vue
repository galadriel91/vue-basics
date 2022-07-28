<template>
    <div class="container">
        <NoteHeader v-if="!showing" />
        <NoteSearch />
        <RouterView />
        <NotePagi v-if="isPagi" />
        <NoteLoading />
    </div>
</template>

<script>
import NoteHeader from '@/components/common/NoteHeader.vue';
import NoteSearch from '@/components/common/NoteSearch.vue';
import NoteLoading from '@/components/common/NoteLoading.vue';
import NotePagi from '@/components/note/NotePagi.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
    components: {
        NoteLoading,
        NoteHeader,
        NoteSearch,
        NotePagi,
    },
    setup() {
        const route = useRoute();
        const showing = computed(() => {
            return route.meta.title === 'Error';
        });
        const isPagi = computed(() => {
            return route.meta.title === 'Main' || route.meta.title === 'Search';
        });
        return {
            showing,
            isPagi,
        };
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
