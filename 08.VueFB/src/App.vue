<template>
    <div class="container">
        <TodoLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoLoading from '@/components/TodoLoading.vue';
export default defineComponent({
    components: {
        TodoLoading,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
