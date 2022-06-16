<template>
    <div class="container">
        <TodoHeader/>
        <TodoInput/>
        <TodoContainer/>
    </div>
</template>

<script>
import TodoHeader from 'Components/TodoHeader.vue';
import TodoInput from 'Components/TodoInput.vue';
import TodoContainer from 'Components/TodoContainer.vue';
export default {
    components:{
        TodoHeader,
        TodoInput,
        TodoContainer
    }
}
</script>

<style lang="scss">
    @import 'Style/index';
</style>