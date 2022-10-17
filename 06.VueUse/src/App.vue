<template>
    <div class="container">
        <NumberBaseball />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NumberBaseball from './components/NumberBaseball/NumberBaseball.vue';

export default defineComponent({
    components: {
        NumberBaseball,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
