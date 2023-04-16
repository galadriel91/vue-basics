<template>
    <div class="loadingContainer" v-if="loading">
        <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts" setup>

    import { commonStore } from '@/store/commonStore';
    import { storeToRefs } from 'pinia';
    
    const common = commonStore();
    const { loading } = storeToRefs(common);

</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/CommonLoading';
</style>
