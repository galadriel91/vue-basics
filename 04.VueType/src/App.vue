<template>
    <div class="container">
        <TodoHeader/>
        <TodoInput @addItem="onAddItem"/>
        <ul>
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" 
            @checkItem="onCheckItem" @removeItem="onRemoveItem" @updateItem="onUpdateItem"/>
        </ul>
    </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';
    import type { TodoItems } from '@/types'
    import TodoHeader from '@/components/TodoHeader.vue';
    import TodoInput from '@/components/TodoInput.vue';
    import TodoItem from '@/components/TodoItem.vue';

    const todos = ref([] as TodoItems[]);

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

    const onGetItem = () => {
        todos.value = storage.fetch();
    };
    onGetItem();

    const onAddItem = (title:string) => {
        const todo = {
            id:Date.now(),
            title:title,
            isCheck:false,
        }
        todos.value.unshift(todo)
        storage.save(todos.value);
    }

    const onCheckItem = (value:number) => {
        const index = todos.value.findIndex(v => v.id === value);
        todos.value[index].isCheck = !todos.value[index].isCheck;
        storage.save(todos.value);
    }
    const onRemoveItem = (value: number) => {
        const index = todos.value.findIndex(v => v.id === value);
        todos.value.splice(index, 1);
        storage.save(todos.value);
    };
    const onUpdateItem = (value: { id: number; title: string }) => {
        const index = todos.value.findIndex(v => v.id === value.id);
        todos.value[index].title = value.title;
        storage.save(todos.value);
    };

</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>