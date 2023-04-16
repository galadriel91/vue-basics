<template>
    <div>
        <CommonNav/>
        <RouterView :key="$route.path" />
        <CommonFooter/>
        <CommonLoading/>
    </div>
</template>

<script setup lang="ts">
    import CommonFooter from '@/components/common/CommonFooter.vue';
    import CommonLoading from '@/components/common/CommonLoading.vue';
    import CommonNav from '@/components/common/CommonNav.vue';

</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>