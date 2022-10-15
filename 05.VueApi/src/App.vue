<template>
    <div>
        <CommonFooter />
        <CommonLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonFooter from './components/common/CommonFooter.vue';
import CommonLoading from './components/common/CommonLoading.vue';

export default defineComponent({
    components: {
        CommonFooter,
        CommonLoading,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
