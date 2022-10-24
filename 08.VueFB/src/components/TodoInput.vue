<template>
    <form @submit.prevent="onSubmitForm">
        <input
            type="text"
            placeholder="오늘 해야할 일을 입력해 주세요"
            v-model="value"
            ref="input"
        />
        <button class="xi-arrow-right" type="submit"></button>
    </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useItem } from '@/store/itemStore';

export default defineComponent({
    setup() {
        const item = useItem();
        const { ADD_TODO } = item;
        const value = ref('');
        const input = ref<HTMLInputElement | null>(null);

        const onSubmitForm = async () => {
            if (value.value.length) {
                ADD_TODO({
                    id: Date.now(),
                    created: Date.now(),
                    content: value.value,
                    isCheck: false,
                });
                value.value = '';
                input.value?.focus();
            } else {
                alert('다시 한번 확인 해 주세요');
                input.value?.focus();
            }
        };

        onMounted(() => {
            input.value?.focus();
        });
        return {
            value,
            input,
            onSubmitForm,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoInput';
</style>
