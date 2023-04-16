<template>
    <ListItem/>
</template>

<script setup lang="ts">

    import { useLoading }from '@/composables/useLoading'    
    import ListItem from '@/components/list/ListsItem.vue';

    useLoading()

</script>
