<template>
    <div>
        <ListItem/>
    </div>
</template>

<script>
    import ListItem from '@/components/list/ListItem.vue';
    export default {
        components:{
            ListItem
        },
        mounted(){
            this.$store.dispatch('FETCH_NEWS')
        }
    }
</script>

<style lang="scss" scoped>

</style>