<template>
    <div class="loadingWrap" v-if="loading">
        <div class="loader"></div>
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
@import '@/assets/scss/components/TodoLoading';
</style>
