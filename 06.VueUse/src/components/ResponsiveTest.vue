<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">
            <h2>{{ message }}</h2>
        </div>
        <div>
            <p>
                시도횟수: <strong>{{ tries.length }}회</strong> , 평균반응속도:
                <strong>{{ AVERAGE }}초</strong>
            </p>
            <button
                class="xi-refresh"
                v-if="tries.length"
                @click="onClickReset"
            ></button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onBeforeUnmount } from 'vue';

export default defineComponent({
    setup() {
        let startTime = 0;
        let endTime = 0;
        let timeout = 0;
        const state = ref('waiting');
        const message = ref('클릭해서 시작해 주세요');
        const tries = ref([] as number[]);

        const onClickReset = () => {
            clearTimeout(timeout);
            state.value = 'waiting';
            message.value = '클릭해서 시작해 주세요';
            tries.value = [];
        };

        const onClickScreen = () => {
            if (state.value === 'waiting') {
                state.value = 'ready';
                message.value = '초록색으로 바뀌면 클릭하세요';
                timeout = setTimeout(() => {
                    state.value = 'now';
                    message.value = '지금 클릭!';
                    startTime = Date.now();
                }, Math.random() * 1000 + 2000);
            } else if (state.value === 'ready') {
                clearTimeout(timeout);
                state.value = 'waiting';
                message.value = '성급하셨네요. 클릭해서 다시 시작하세요';
            } else if (state.value === 'now') {
                state.value = 'waiting';
                message.value = '클릭해서 시작해 주세요';
                endTime = Date.now();
                tries.value.push(endTime - startTime);
            }
        };

        const AVERAGE = computed(() => {
            if (
                (
                    (tries.value.reduce((a, b) => a + b, 0) /
                        tries.value.length) *
                    0.001
                ).toFixed(2) === 'NaN'
            ) {
                return 0;
            } else {
                return (
                    (tries.value.reduce((a, b) => a + b, 0) /
                        tries.value.length) *
                    0.001
                ).toFixed(2);
            }
        });

        onBeforeUnmount(() => {
            clearTimeout(timeout);
        });

        return {
            state,
            message,
            tries,
            onClickReset,
            onClickScreen,
            AVERAGE,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/ResponsiveTest.scss';
</style>
