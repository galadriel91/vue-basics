<template>
    <div class="container">
        <h1>404 Not Found</h1>
        <p>페이지를 찾을수 없습니다.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useLoading } from '@/composables/useLoading';

export default defineComponent({
    setup() {
        // useLoading();
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/NotPage';
</style>
