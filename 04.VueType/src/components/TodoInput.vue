<template>
    <form @submit.prevent="onSubmitForm">
        <input
            type="text"
            placeholder="오늘 해야할 일을 입력해 주세요"
            v-model="value"
        />
        <button class="xi-arrow-right" type="submit"></button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
const onSubmitForm = () => {
    
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoInput.scss';
</style>