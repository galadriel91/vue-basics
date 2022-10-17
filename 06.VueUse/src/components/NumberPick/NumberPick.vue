<template>
    <div>
        <div class="startWrap" v-if="isStart">
            <h2>버튼을 눌러서 번호를 뽑아 주세요</h2>
            <button class="xi-play" @click="onClickStart"></button>
        </div>
        <div class="numberWrap" v-else>
            <NumberBall v-for="(item, i) in numberBall" :item="item" :key="i" />
        </div>
        <div class="bonusWrap" v-if="bonus">
            <h3>보너스!</h3>
            <NumberBall :item="bonus" />
            <button class="xi-redo" @click="onClickReset"></button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from 'vue';
import NumberBall from '@/components/NumberPick/NumberBall.vue';
// import { useNumber } from '../composable/getNumber';

export default defineComponent({
    components: {
        NumberBall,
    },
    setup() {
        const { getNumber } = useNumber();
        let timeout = [];
        const isStart = ref(true);
        const getBall = ref(getNumber());
        const numberBall = ref([]);
        const bonus = ref('');

        const onClickStart = () => {
            isStart.value = false;
            for (let i = 0; i < 6; i++) {
                timeout[i] = setTimeout(() => {
                    numberBall.value.push(getBall.value[i]);
                }, (i + 1) * 1000);
            }
            timeout[6] = setTimeout(() => {
                bonus.value = getBall.value[getBall.value.length - 1];
            }, 7000);
        };

        const onClickReset = () => {
            (getBall.value = getNumber()),
                (numberBall.value = []),
                (bonus.value = '');
            onClickStart();
        };

        onBeforeUnmount(() => {
            timeout.forEach(v => clearTimeout(v));
        });

        return {
            isStart,
            getBall,
            numberBall,
            bonus,
            onClickStart,
            onClickReset,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/NumberPick/NumberPick.scss';
</style>
