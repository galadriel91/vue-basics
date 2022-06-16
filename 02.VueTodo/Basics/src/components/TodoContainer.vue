<template>
    <ul>
        <TodoItem v-for="todo in TODOS" :key="todo.id" :item="todo"/>
    </ul>
</template>

<script>
import TodoItem from 'Components/TodoItem.vue';
export default {
    components:{
            TodoItem
    },
    computed:{
        TODOS(){
            return this.$store.state.todos
        }
    },
    created(){
        this.$store.commit('GET_TODO')
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TodoContainer';
</style>