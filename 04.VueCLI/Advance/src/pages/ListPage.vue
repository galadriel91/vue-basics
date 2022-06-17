<template>
    <div>
        <ListItem/>
    </div>
</template>

<script>
    import ListItem from '@/components/list/ListItem.vue';
    import { useStore } from 'vuex'
    import { useRoute } from 'vue-router'
    export default {
        components:{
            ListItem
        },
        setup(){
            const store = useStore()
            const route = useRoute()
            const getList = () => {
                store.dispatch('FETCH_LIST' , route.name)
            }
            getList()
        }
    }
</script>

<style lang="scss" scoped>
</style>