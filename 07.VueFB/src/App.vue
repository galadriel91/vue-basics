<template>
    <div class="container">
        <TodoHeader />
        <TodoLoading />
    </div>
</template>

<script setup lang="ts">
import TodoHeader from './components/TodoHeader.vue';
import TodoLoading from './components/TodoLoading.vue';
import { app } from '@/utils/firebase';
console.log(app);
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
