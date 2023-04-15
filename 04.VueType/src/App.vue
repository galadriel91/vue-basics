<template>
    <div class="container">
        <TodoHeader/>
        <TodoInput @addItem="onAddItem"/>
        <ul>
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" 
            @checkItem="onCheckItem" @removeItem="onRemoveItem"/>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import TodoHeader from '@/components/TodoHeader.vue';
    import TodoInput from '@/components/TodoInput.vue';
    import TodoItem from '@/components/TodoItem.vue';
    import type { TodoItems } from '@/types'
    import { ref } from 'vue';

    const todos = ref([] as TodoItems[]);

    const onAddItem = (title : string) => {
        const todo = {
            id:Date.now(),
            title:title,
            isCheck:false,
        }
        todos.value.unshift(todo)
    }

    const onCheckItem = (value:number) => {
        const index = todos.value.findIndex(v => v.id === value);
        todos.value[index].isCheck = !todos.value[index].isCheck;
    }
    const onRemoveItem = (value: number) => {
            const index = todos.value.findIndex(v => v.id === value);
            todos.value.splice(index, 1);
        };

</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>