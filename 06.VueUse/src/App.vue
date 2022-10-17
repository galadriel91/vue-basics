<template>
    <div class="container">
        <ResponsiveTest />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResponsiveTest from '@/components/ResponsiveTest.vue';

export default defineComponent({
    components: {
        ResponsiveTest,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
