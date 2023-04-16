<template>
    <div class="number">{{ number }}</div>
    <div class="btnWrap">
        <button @click="onClickPlus">+</button>
        <button @click="onClickMinus">-</button>
    </div>
</template>

<script setup>

    import { piniaStore } from '../store/piniaStore';
    import { storeToRefs } from 'pinia';

    const store = piniaStore();
    const { number } = storeToRefs(store)
    // const { onClickMinus , onClickPlus} = store

    // 스토어 액션을 거치지 않고 바로 스테이트 값 변경이 가능 - Vuex와 다름
    const onClickPlus = () => {
        number.value++
    }

    const onClickMinus = () => {
        number.value--
    }

</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/VuePinia';
</style>