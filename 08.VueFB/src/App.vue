<template>
    <div class="container">
        <TodoHeader />
        <TodoLoading />
        <TodoInput />
        <TodoContainer />
    </div>
</template>

<script lang="ts">
import TodoContainer from './components/TodoContainer.vue';
import TodoLoading from '@/components/TodoLoading.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import { useCommon } from '@/store/commonStore';
import { useItem } from '@/store/itemStore';
import { defineComponent, watch } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        TodoLoading,
        TodoHeader,
        TodoInput,
        TodoContainer,
    },
    setup() {
        const common = useCommon();
        const item = useItem();
        const { OFF_LOADING } = common;
        const { todos } = storeToRefs(item);
        watch(todos, () => {
            OFF_LOADING();
        });
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
