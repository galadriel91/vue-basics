<template>
    <div>
        <div class="btnWrap">
            <button class="xi-plus" @click="onClickCreate"></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const onClickCreate = () => {
    router.push('/create');
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
