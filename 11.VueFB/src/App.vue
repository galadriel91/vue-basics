<template>
    <div class="container">
        <TodoHeader />
        <TodoInput />
        <TodoContainer />
        <TodoLoading />
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoContainer from '@/components/TodoContainer.vue';
import TodoLoading from '@/components/TodoLoading.vue';
import { useStore } from '@/store';
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
export default {
    components: {
        TodoHeader,
        TodoInput,
        TodoContainer,
        TodoLoading,
    },
    setup() {
        const store = useStore();
        const { todos } = storeToRefs(store);
        const { offLoading } = store;
        watch(
            todos,
            () => {
                offLoading();
            },
            {
                deep: true,
            },
        );
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
