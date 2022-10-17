<template>
    <div class="container">
        <TimesTable />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimesTable from './components/TimesTable.vue';

export default defineComponent({
    components: { TimesTable },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
