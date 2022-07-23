<template>
    <div class="container">
        <TodoHeader />
        <TodoInput />
        <TodoContainer />
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoContainer from '@/components/TodoContainer.vue';
export default {
    components: {
        TodoHeader,
        TodoInput,
        TodoContainer,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
