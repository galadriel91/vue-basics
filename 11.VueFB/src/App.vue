<template>
    <div class="container">
        <TodoHeader />
        <TodoInput />
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
export default {
    components: {
        TodoHeader,
        TodoInput,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
