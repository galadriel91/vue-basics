<template>
    <div class="container">
        <NumberPick />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NumberPick from './components/NumberPick/NumberPick.vue';

export default defineComponent({
    components: {
        NumberPick,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
