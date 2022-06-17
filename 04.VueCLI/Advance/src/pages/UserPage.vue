<template>
    <div class="userContainer">
        <UserItem :item="USERITEM" v-if="USERITEM">
            <template v-slot:userName>User : {{USERITEM.id}}</template>
            <template v-slot:userTime>Created : {{USERITEM.created}}</template>
            <template v-slot:userPoints>Karma : {{USERITEM.karma}}</template>
        </UserItem>
    </div>
</template>

<script>
    import UserItem from '@/components/user/UserItem.vue';
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    export default {
        components:{
            UserItem
        },
        setup(){
            const store = useStore();
            const USERITEM = computed(()=>{
                return store.state.user
            })
            return { USERITEM }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/UserPage';
</style>