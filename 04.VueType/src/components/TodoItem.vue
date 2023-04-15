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

<script setup lang="ts">
    import type { TodoItems } from '@/types'
    import  {ref, type PropType }from 'vue'

    const props = defineProps({
        todo:{
            type: Object as PropType<TodoItems>,
            required:true
        }
    });
    
    const emit = defineEmits([
        'checkItem'
    ])

    const isUpdate = ref(false)
    const value = ref('')
    
    const onClickCheck = () => {
        emit('checkItem', props.todo.id)
    }
    const onClickRemove = () => {

    }
    const onClickUpdate = () => {

    }
    const onSubmitUpdate = () => {
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoItem.scss';
</style>