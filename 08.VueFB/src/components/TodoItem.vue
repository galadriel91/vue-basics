<template>
    <li>
        <div class="itemWrap">
            <div class="checkWrap">
                <button
                    class="xi-checkbox-blank"
                    v-if="!item.isCheck"
                    @click="onClickCheck"
                ></button>
                <button
                    class="xi-check-square-o"
                    v-else
                    @click="onClickCheck"
                ></button>
            </div>
            <div class="titleWrap">
                <h4 :class="{ complete: item.isCheck }" v-if="!isUpdate">
                    {{ item.content }}
                </h4>
                <form v-else @submit.prevent="onSubmitUpdate">
                    <input
                        type="text"
                        :placeholder="item.content"
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
import { defineComponent, ref, nextTick, type PropType } from 'vue';
import { useItem } from '@/store/itemStore';
import type { TodoItem } from '@/store/types';

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<TodoItem>,
            required: true,
        },
    },
    setup(props) {
        const item = useItem();
        const { CHECK_TODO, REMOVE_TODO, UPDATE_TODO } = item;
        const value = ref('');
        const update = ref<HTMLInputElement | null>(null);
        const isUpdate = ref(false);

        const onClickCheck = () => {
            CHECK_TODO({
                id: props.item.id,
                isCheck: !props.item.isCheck,
            });
            isUpdate.value = false;
            value.value = '';
        };
        const onClickRemove = () => {
            REMOVE_TODO(props.item.id);
        };
        const onClickUpdate = () => {
            isUpdate.value = true;
            nextTick(() => {
                update.value?.focus();
            });
        };
        const onSubmitUpdate = () => {
            UPDATE_TODO({
                id: props.item.id,
                content: value.value,
            });
            isUpdate.value = false;
            value.value = '';
        };
        return {
            value,
            isUpdate,
            update,
            onClickCheck,
            onClickRemove,
            onClickUpdate,
            onSubmitUpdate,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoItem';
</style>
