<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps({
    className: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteAlert.scss';
</style>
