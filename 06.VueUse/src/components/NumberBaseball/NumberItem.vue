<template>
    <li>
        <p class="listIndex">{{ item.index }}</p>
        <div>
            <p>시도 : {{ item.tries }}</p>
            <span>{{ item.result }}</span>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/NumberBaseball/NumberItem.scss';
</style>
