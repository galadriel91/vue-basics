<template>
    <div>
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteLoading from './components/common/NoteLoading.vue';

export default defineComponent({
    components: {
        NoteLoading,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
