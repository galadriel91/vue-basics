<template>
    <div class="loadingWrap" v-if="loading">
        <div class="loader"></div>
    </div>
</template>

<script>
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
export default {
    setup() {
        const store = useStore();
        const { loading } = storeToRefs(store);
        return {
            loading,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoLoading';
</style>
