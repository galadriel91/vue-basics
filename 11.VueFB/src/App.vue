<template>
    <div class="container">
        <TodoHeader />
        <TodoInput />
        <TodoContainer />
        <TodoLoading />
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoContainer from '@/components/TodoContainer.vue';
import TodoLoading from '@/components/TodoLoading.vue';
export default {
    components: {
        TodoHeader,
        TodoInput,
        TodoContainer,
        TodoLoading,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
