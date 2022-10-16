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

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    emits: ['addItem'],
    setup(props, { emit }) {
        const value = ref('');
        const onSubmitForm = () => {
            if (value.value) {
                emit('addItem', value.value);
                initValue();
            } else {
                alert('오늘 할 일을 입력해 주세요');
            }
        };
        const initValue = () => {
            value.value = '';
        };
        return {
            onSubmitForm,
            value,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoInput';
</style>
