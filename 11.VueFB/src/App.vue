<template>
    <div class="container">
        <TodoHeader />
        <TodoInput />
        <TodoContainer />
    </div>
</template>

<script>
import { app } from '@/utils/fs';
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoContainer from '@/components/TodoContainer.vue';
console.log(app);
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
