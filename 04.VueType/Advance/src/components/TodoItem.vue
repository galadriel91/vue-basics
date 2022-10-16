<template>
    <li>
        <div class="itemWrap">
            <div class="checkWrap">
                <button
                    class="xi-checkbox-blank"
                    v-if="!todo.isCheck"
                    @click="onClickCheck"
                ></button>
                <button
                    class="xi-check-square-o"
                    v-else
                    @click="onClickCheck"
                ></button>
            </div>
            <div class="titleWrap">
                <h4 :class="{ complete: todo.isCheck }" v-if="!isUpdate">
                    {{ todo.title }}
                </h4>
                <form v-else @submit.prevent="onSubmitUpdate">
                    <input
                        type="text"
                        :placeholder="todo.title"
                        ref="update"
                        v-model="value"
                    />
                    <button
                        type="submit"
                        class="xi-check-min"
                        @mousedown="onSubmitUpdate"
                    ></button>
                </form>
                <button
                    class="xi-pen updateBtn"
                    @click="onClickUpdate"
                    v-if="!isUpdate"
                ></button>
            </div>
            <div class="buttonWrap">
                <button
                    class="xi-minus-square-o"
                    @click="onClickRemove"
                ></button>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import type { TodoItems } from '@/types';
import { defineComponent, nextTick, ref, type PropType } from 'vue';

export default defineComponent({
    emits: ['checkItem', 'removeItem'],
    props: {
        todo: {
            type: Object as PropType<TodoItems>,
            required: true,
        },
    },
    setup(props, { emit }) {
        const update = ref<HTMLInputElement | null>(null);
        const isUpdate = ref(false);
        const value = ref('');
        const onClickCheck = () => {
            emit('checkItem', props.todo.id);
            isUpdate.value = false;
        };
        const onClickRemove = () => {
            emit('removeItem', props.todo.id);
        };
        // const onClickUpdate = () => {
        //     isUpdate.value = true;
        //     nextTick(() => {
        //         update.value?.focus();
        //     });
        // };
        // const onSubmitUpdate = () => {
        //     emit('submitItem', {
        //         id: props.todo.id,
        //         title: value.value,
        //     });
        //     isUpdate.value = false;
        // };
        return {
            value,
            update,
            isUpdate,
            onClickCheck,
            onClickRemove,
            // onClickUpdate,
            // onSubmitUpdate,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoItem';
</style>
