<template>
    <div class="container">
        <TodoHeader />
        <TodoInput @addItem="onAddItem" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';

export default defineComponent({
    components: {
        TodoHeader,
        TodoInput,
    },
    setup() {
        const todos = ref([]);
        const onAddItem = (value: string) => {
            todos.value.unshift({
                title: value,
                id: Date.now(),
                isCheck: false,
            });
            // storage.save(todos.value);
        };
        return {
            onAddItem,
            todos,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
