<template>
    <div class="loadingContainer" v-if="loading">
        <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const common = useCommon();
        const { loading } = storeToRefs(common);
        return {
            loading,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/CommonLoading';
</style>
