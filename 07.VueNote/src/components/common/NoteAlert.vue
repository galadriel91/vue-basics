<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteAlert.scss';
</style>
