<template>
    <div class="container">
        <TodoHeader />
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
export default {
    components: {
        TodoHeader,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
