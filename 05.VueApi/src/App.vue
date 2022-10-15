<template>
    <div>
        <CommonFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonFooter from './components/common/CommonFooter.vue';

export default defineComponent({
    components: {
        CommonFooter,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
