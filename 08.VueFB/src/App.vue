<template>
    <div class="container">
        <TodoHeader />
        <TodoLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoLoading from '@/components/TodoLoading.vue';
import TodoHeader from './components/TodoHeader.vue';
export default defineComponent({
    components: {
        TodoLoading,
        TodoHeader,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
