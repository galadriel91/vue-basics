<template>
    <div class="loadingWrap" v-if="LOADING">
        <div class="loader"></div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    setup() {
        const LOADING = computed(() => {
            return false;
        });
        return {
            LOADING,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteLoading';
</style>
