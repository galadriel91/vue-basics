<template>
    <div>
        <div class="resultWrap">{{ result }}</div>
        <form @submit.prevent="onSubmitForm">
            <input
                type="text"
                placeholder="네자리 숫자를 입력해 주세요"
                v-model="value"
                ref="answer"
                @input="onInputForm"
                maxlength="4"
            />
            <button class="xi-arrow-right" type="submit"></button>
        </form>
        <ul>
            <NumberItem v-for="item in tries" :item="item" :key="item.index" />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useNumber } from '@/composable/randomNumber';
import NumberItem from './NumberItem.vue';
import type { NumberArray } from './types';

export default defineComponent({
    components: {
        NumberItem,
    },
    setup() {
        const { getNumber } = useNumber();
        const numbers = ref(getNumber());
        const value = ref('');
        const result = ref('');
        const tries = ref([] as NumberArray[]);
        const answer = ref<HTMLInputElement | null>(null);

        onMounted(() => {
            answer.value?.focus();
        });

        const onInputForm = () => {
            result.value = '';
        };

        const onSubmitForm = () => {
            if (value.value.length === 4) {
                if (value.value === numbers.value.join('')) {
                    result.value = '홈런입니다!';
                    value.value = '';
                    tries.value = [];
                    numbers.value = getNumber();
                    answer.value?.focus();
                } else {
                    if (tries.value.length >= 9) {
                        result.value = `횟수를 초과했습니다. 정답은 ${numbers.value.join(
                            '',
                        )} 이었습니다.`;
                        value.value = '';
                        tries.value = [];
                        numbers.value = getNumber();
                        answer.value?.focus();
                    } else {
                        let strike = 0;
                        let ball = 0;
                        const valueArray = value.value
                            .split('')
                            .map(v => parseInt(v));
                        for (let i = 0; i < 4; i++) {
                            if (valueArray[i] === numbers.value[i]) {
                                strike++;
                            } else if (numbers.value.includes(valueArray[i])) {
                                ball++;
                            }
                        }
                        tries.value.unshift({
                            index: tries.value.length + 1,
                            tries: value.value,
                            result: `${strike}스트라이크 , ${ball}볼 입니다.`,
                        });
                        value.value = '';
                        answer.value?.focus();
                    }
                }
            } else {
                result.value = '네자리 숫자를 입력해 주세요!';
                answer.value?.focus();
                value.value = '';
            }
        };

        return {
            numbers,
            value,
            result,
            tries,
            answer,
            onInputForm,
            onSubmitForm,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/NumberBaseball/NumberBaseball.scss';
</style>
