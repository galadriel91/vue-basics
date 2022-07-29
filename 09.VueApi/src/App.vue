<template>
    <div class="container">
        <NoteHeader v-if="!showing" />
        <NoteSearch v-if="!showing" />
        <RouterView :key="$route.path" />
        <NoteLoading />
    </div>
</template>

<script>
import NoteHeader from '@/components/common/NoteHeader.vue';
import NoteSearch from '@/components/common/NoteSearch.vue';
import NoteLoading from '@/components/common/NoteLoading.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
    components: {
        NoteLoading,
        NoteHeader,
        NoteSearch,
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
