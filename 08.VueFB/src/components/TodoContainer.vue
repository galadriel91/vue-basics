<template>
    <ul>
        <!-- <TodoItem v-for="todo in todos" :key="todo.created" :item="todo" /> -->
    </ul>
</template>

<script lang="ts">
// import TodoItem from './TodoItem.vue';
import { defineComponent } from 'vue';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        // TodoItem,
    },
    setup() {
        const item = useItem();
        const { todos } = storeToRefs(item);
        // const { GET_TODO } = item;
        // GET_TODO();
        return {
            todos,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoContainer';
</style>
