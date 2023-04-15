<template>
    <div class="container">
        <TodoHeader/>
        <TodoInput @addItem="onAddItem"/>
        <ul>
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
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

</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>