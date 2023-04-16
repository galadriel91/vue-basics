<template>
    <ListItem/>
</template>

<script setup lang="ts">
    import ListItem from '@/components/list/ListsItem.vue';
    import { onMounted } from 'vue';
    import { commonStore } from '@/store/commonStore'
    const { OFF_LOADING } = commonStore()

    onMounted(()=>{
        OFF_LOADING()
    })
    
</script>
