<template>
    <div>
        <ListItem/>
    </div>
</template>

<script>
    import ListItem from '@/components/list/ListItem.vue';
    import mixins from '@/utils/mixins'
    export default {
        components:{
            ListItem
        },
        mixins:[mixins],
    }
</script>

<style lang="scss" scoped>

</style>