<template>
    <li>
        아이템
        <!-- <div class="itemWrap">
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
        </div> -->
    </li>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>