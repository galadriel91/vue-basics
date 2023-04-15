<template>
    <img src="../assets/images/vue.png" alt="뷰 로고 이미지">
    <div class="number">{{ initNum }}</div>
    <div class="btnWrap">
        <button @click="onClickPlus">+</button>
        <button @click="onClickMinus">-</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const initNum = ref(0)
const onClickPlus = () => { 
    initNum.value++
}
const onClickMinus = () => {
    initNum.value--
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>