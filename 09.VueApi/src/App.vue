<template>
    <div class="container">
        <NoteHeader v-if="!showing" />
        <RouterView />
        <NotePagi />
        <NoteLoading />
    </div>
</template>

<script>
import NoteHeader from '@/components/common/NoteHeader.vue';
import NoteLoading from '@/components/common/NoteLoading.vue';
import NotePagi from '@/components/note/NotePagi.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
    components: {
        NoteLoading,
        NoteHeader,
        NotePagi,
    },
    setup() {
        const route = useRoute();
        const showing = computed(() => {
            return route.meta.title === 'Error';
        });
        return {
            showing,
        };
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
