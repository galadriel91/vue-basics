<template>
    <ListItem/>
</template>

<script setup lang="ts">
    import ListItem from '@/components/list/ListsItem.vue';
    import { useLoading }from '@/composables/useLoading'    

    useLoading()
</script>
