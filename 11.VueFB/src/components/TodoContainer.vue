<template>
    <ul>
        <TodoItem v-for="todo in todos" :key="todo.id" :item="todo" />
    </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
export default {
    components: {
        TodoItem,
    },
    setup() {
        const store = useStore();
        const { todos } = storeToRefs(store);
        const { getTodoItem } = store;
        getTodoItem();
        return {
            todos,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoContainer';
</style>
