<template>
    <div class="itemContainer">
        <div v-if="POST">
            <UserItem :item="POST">
                <template v-slot:userName><RouterLink :to="`/user/${POST.user}`">User : {{POST.user}}</RouterLink></template>
                <template v-slot:userTime>Posted : {{POST.time_ago}}</template>
                <template v-slot:userPoints>Points : {{POST.points}}</template>
            </UserItem>
            <div class="itemWrap">
                <h1>{{POST.title}}</h1>
                <div v-html="POST.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import UserItem from "@/components/user/UserItem.vue"
import { useOffLoading } from '@/composable/useOffLoading'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default{
    components:{
        UserItem,
    },
    setup(){
        const store = useStore();
        const POST = computed(()=>{
            return store.state.post
        })
        useOffLoading()
        return { POST }
    }
} 
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/PostPage';
</style>