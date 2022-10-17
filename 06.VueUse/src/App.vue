<template>
    <div class="container">
        <!-- <TimesTable /> -->
        <WordRelay />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimesTable from './components/TimesTable.vue';
import WordRelay from './components/WordRelay.vue';

export default defineComponent({
    components: {
        WordRelay,
        TimesTable,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
