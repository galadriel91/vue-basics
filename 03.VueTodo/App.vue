<template>
    <div class="container">
        <TodoHeader/>
        <TodoInput/>
    </div>
</template>

<script>
import TodoHeader from 'Components/TodoHeader.vue';
import TodoInput from 'Components/TodoInput.vue';
export default {
    components:{
        TodoHeader,
        TodoInput
    }
}
</script>

<style lang="scss">
    @import 'Style/index';
</style>