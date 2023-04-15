<template>
    <div class="container">
        <TodoHeader/>
        <TodoInput/>
        <ul>
            <TodoItem/>
        </ul>
    </div>
</template>

<script setup lang="ts">
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoItem from '@/components/TodoItem.vue';


</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>