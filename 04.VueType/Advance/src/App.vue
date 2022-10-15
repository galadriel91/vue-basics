<template>
    <div class="container">
        <TodoHeader />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoHeader from './components/TodoHeader.vue';

export default defineComponent({
    components: {
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
