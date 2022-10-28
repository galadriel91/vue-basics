<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        className: {
            type: String,
            required: true,
        },
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteAlert.scss';
</style>
