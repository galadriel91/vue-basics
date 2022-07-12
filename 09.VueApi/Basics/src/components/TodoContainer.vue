<template>
    <div>
        <TodoList />
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import { provide, readonly, ref } from 'vue';
export default {
    components: {
        TodoList,
    },
    setup() {
        const todos = ref([]);
        provide('todos', readonly(todos));
        const initTodos = init_todos => {
            todos.value = initTodos;
        };

        const addTodo = (todo, date) => {};
        const removeTodo = id => {};
        const completeTodo = id => {};

        provide('addTodo', addTodo);
        provide('removeTodo', removeTodo);
        provide('completeTodo', completeTodo);

        return {};
    },
};
</script>

<style lang="scss" scoped></style>
