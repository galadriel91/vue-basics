<template>
    <div class="container">
        <TodoHeader />
        <TodoInput @addItem="onAddItem" />
        <ul>
            <TodoItem
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @checkItem="onCheckItem"
            />
        </ul>
    </div>
</template>

<script lang="ts">
import type { TodoItems } from '@/types';
import { defineComponent, ref } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';

const storage = {
    save(item: TodoItems[]) {
        localStorage.setItem('todos', JSON.stringify(item));
    },
    fetch(): TodoItems[] {
        const item = localStorage.getItem('todos') || '[]';
        const todoItem = JSON.parse(item);
        return todoItem;
    },
};

export default defineComponent({
    components: {
        TodoHeader,
        TodoInput,
        TodoItem,
    },
    setup() {
        const todos = ref([] as TodoItems[]);
        const onGetItem = () => {
            todos.value = storage.fetch();
        };
        onGetItem();
        const onCheckItem = (value: number) => {
            const index = todos.value.findIndex(v => v.id === value);
            todos.value[index].isCheck = !todos.value[index].isCheck;
            storage.save(todos.value);
        };
        const onAddItem = (value: string) => {
            todos.value.unshift({
                title: value,
                id: Date.now(),
                isCheck: false,
            });
            storage.save(todos.value);
        };
        return {
            todos,
            onAddItem,
            onCheckItem,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
