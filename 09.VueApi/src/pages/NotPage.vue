<template>
    <div class="container">
        <h1>404 Not Found</h1>
        <p>페이지를 찾을수 없습니다.</p>
    </div>
</template>

<script>
import { useLoading } from '@/composables/useLoading';
export default {
    setup() {
        useLoading();
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/NotPage';
</style>
