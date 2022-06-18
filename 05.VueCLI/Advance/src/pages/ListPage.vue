<template>
    <div>
        <ListItem/>
    </div>
</template>

<script>
    import ListItem from '@/components/list/ListItem.vue';
    import { useOffLoading } from '@/composable/useOffLoading'
    export default {
        components:{
            ListItem
        },
        setup(){
            useOffLoading()
        }
    }
</script>

<style lang="scss" scoped>
</style>