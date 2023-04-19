<template>
    <div class="loadingWrap" v-if="loading">
        <div class="loader"></div>
    </div>
</template>

<script setup lang="ts">
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';

const common = useCommon();

const { loading } = storeToRefs(common);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/TodoLoading';
</style>
