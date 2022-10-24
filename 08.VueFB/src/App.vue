<template>
    <div class="container">
        <TodoHeader />
        <TodoLoading />
        <TodoInput />
        <TodoContainer />
    </div>
</template>

<script lang="ts">
import { app } from './utils/fb';
import { defineComponent } from 'vue';
import TodoLoading from '@/components/TodoLoading.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoContainer from './components/TodoContainer.vue';
console.log(app);
export default defineComponent({
    components: {
        TodoLoading,
        TodoHeader,
        TodoInput,
        TodoContainer,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
