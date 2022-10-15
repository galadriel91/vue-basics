<template>
    <div>
        <ListsItem />
    </div>
</template>

<script lang="ts">
import ListsItem from '../components/list/ListsItem.vue';
import { defineComponent } from 'vue';
import { useLoading } from '@/composables/useLoading';

export default defineComponent({
    components: {
        ListsItem,
    },
    setup() {
        useLoading();
    },
});
</script>
