<template>
    <div class="itemContainer">
        <div v-if="POST">
            <UserItem :item="POST">
                <h4 slot="userName"><RouterLink :to="`/user/${POST.user}`">User : {{POST.user}}</RouterLink></h4>
                <span slot="userTime">Posted : {{POST.time_ago}}</span>
                <p slot="userPoints">Points : {{POST.points}}</p>
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
import mixins from '@/utils/mixins'
export default{
    components:{
        UserItem,
    },
    data(){
        return{
            first:true
        }
    },
    computed:{
        POST(){
            return this.$store.state.post
        }
    },
    mixins:[mixins],
} 
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/PostPage';
</style>