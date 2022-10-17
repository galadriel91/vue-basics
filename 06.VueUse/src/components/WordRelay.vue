<template>
    <div>
        <div class="wordWrap">{{ word }}</div>
        <form @submit.prevent="onSubmitForm">
            <input
                type="text"
                placeholder="세자리 단어를 입력해 주세요"
                v-model="value"
                ref="answer"
            />
            <button class="xi-arrow-right" type="submit"></button>
        </form>
        <div class="resultWrap" :class="{ correct: isCorrect }">
            {{ result }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    setup() {
        const word = ref('소나무');
        const value = ref('');
        const result = ref('');
        const isCorrect = ref(false);
        const answer = ref<HTMLInputElement | null>(null);

        onMounted(() => {
            answer.value?.focus();
        });

        const onSubmitForm = () => {
            if (value.value.length === 3) {
                if (word.value[word.value.length - 1] === value.value[0]) {
                    word.value = value.value;
                    result.value = '정답입니다, 계속하세요!';
                    value.value = '';
                    isCorrect.value = true;
                    answer.value?.focus();
                } else {
                    value.value = '';
                    result.value = '다시 한번 생각해 보세요!';
                    isCorrect.value = false;
                    answer.value?.focus();
                }
            } else {
                value.value = '';
                result.value = '세자리 단어를 입력해 주세요!';
                isCorrect.value = false;
                answer.value?.focus();
            }
        };
        return { word, value, result, isCorrect, answer, onSubmitForm };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/WordRelay.scss';
</style>
