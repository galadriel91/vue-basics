<template>
    <div>
        <div class="numberWrap">
            <strong>{{ first }}</strong> X <strong>{{ second }}</strong> =
            <strong>?</strong>
        </div>
        <form @submit.prevent="onSubmitForm">
            <input
                type="text"
                placeholder="정답을 입력해 주세요"
                v-model="value"
                ref="answer"
            />
            <button class="xi-arrow-right" type="submit"></button>
        </form>
        <div class="resultWrap" :class="{ correct: isCheck }">{{ result }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    setup() {
        const first = ref(Math.ceil(Math.random() * 9));
        const second = ref(Math.ceil(Math.random() * 9));
        const value = ref('');
        const result = ref('');
        const isCheck = ref(false);
        const answer = ref<HTMLInputElement | null>(null);

        const onSubmitForm = () => {
            if (value.value.length) {
                if (first.value * second.value === parseInt(value.value)) {
                    first.value = Math.ceil(Math.random() * 9);
                    second.value = Math.ceil(Math.random() * 9);
                    value.value = '';
                    result.value = '정답! 계속 진행하세요';
                    isCheck.value = true;
                    answer.value?.focus();
                } else {
                    value.value = '';
                    result.value = '다시 한번 생각해 보세요';
                    isCheck.value = false;
                    answer.value?.focus();
                }
            } else {
                value.value = '';
                result.value = '정답을 입력해 주세요!';
                isCheck.value = false;
                answer.value?.focus();
            }
        };

        onMounted(() => {
            answer.value?.focus();
        });

        return { first, second, value, result, isCheck, answer, onSubmitForm };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TimesTable.scss';
</style>
