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
                        @blur.self="onClickBlur"
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

<script>
import { ref, nextTick } from 'vue';
import { useStore } from '@/store';
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();
        const { checkTodoItem, removeTodoItem, updateTodoItem } = store;

        // Update Toggle
        const isUpdate = ref(false);
        const update = ref(null);
        const onClickUpdate = () => {
            isUpdate.value = true;
            nextTick(() => {
                update.value.focus();
            });
        };
        // Submit Update
        const value = ref('');
        const onSubmitUpdate = () => {
            if (value.value.length) {
                updateTodoItem({
                    id: props.item.id,
                    content: value.value,
                });
                isUpdate.value = false;
            } else {
                alert('다시 한번 확인해 주세요');
            }
        };
        // Check Done
        const onClickCheck = () => {
            checkTodoItem(props.item.id);
            isUpdate.value = false;
            value.value = '';
        };

        // RemoveItem
        const onClickRemove = () => {
            removeTodoItem(props.item.id);
        };
        return {
            isUpdate,
            update,
            value,
            onClickCheck,
            onClickRemove,
            onClickUpdate,
            onSubmitUpdate,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoItem';
</style>
