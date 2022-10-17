<template>
    <div class="ball" :style="{ background: BACKGROUND }">
        {{ item }}
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    props: {
        item: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const BACKGROUND = computed(() => {
            if (props.item <= 10) {
                return '#39a6a3';
            } else if (props.item <= 20) {
                return '#fb9300';
            } else if (props.item <= 30) {
                return '#ac66cc';
            } else if (props.item <= 40) {
                return '#2978b5';
            } else {
                return '#ca8a8b';
            }
        });
        return { BACKGROUND };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/NumberPick/NumberBall.scss';
</style>
