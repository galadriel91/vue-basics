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
                        @blur="onInputBlur"
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

<script setup lang="ts">

    import type { TodoItems } from '@/types'
    import  {ref, type PropType , nextTick }from 'vue'

    const props = defineProps({
        todo:{
            type: Object as PropType<TodoItems>,
            required:true
        }
    });
    
    const emit = defineEmits([
        'checkItem',
        'removeItem',
        'updateItem'
    ])

    const isUpdate = ref(false)
    const value = ref('')
    const update = ref<HTMLInputElement | null>(null);

    const onClickCheck = () => {
        emit('checkItem', props.todo.id)
        isUpdate.value = false
        value.value = ''
    }
    const onClickRemove = () => {
        emit('removeItem', props.todo.id)
    }
    const onClickUpdate = () => {
        isUpdate.value = !isUpdate.value
        nextTick(() => {
            update.value?.focus();
        });
    }
    const onSubmitUpdate = () => {
        emit('updateItem' , {
            id:props.todo.id, 
            title:value.value
        })
        isUpdate.value = false;
    }
    const onInputBlur = () => {
        isUpdate.value = false
        value.value = ''
    }

</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoItem.scss';
</style>