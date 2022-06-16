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
            <!-- <div class="commentWrap" v-if="POST.comments.length">
                <h2>Comments</h2>
                <ul>
                    <PostComments v-for="item in POST.comments" :key="item.id" :post="item" :first="first"/>
                </ul>
            </div> -->
        </div>
    </div>
</template>

<script>
import UserItem from "@/components/user/UserItem.vue"
// import PostComments from '@/components/post/PostComments.vue';
// import mixins from '@/utils/mixins'
export default{
    components:{
        UserItem,
        // PostComments
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
    mounted(){
        this.$store.commit('OFF_LOADING')
    }
    // mixins:[mixins],
    // beforeRouteUpdate (to, from, next) {
    //     this.$store.commit('ON_LOADING')
    //     this.$store.dispatch(`FETCH_${to.name}` , to.params.id)
    //     .then(()=>{
    //          if(this.POST == null){
    //             next({path:'/404'})
    //         }else{
    //             next()
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //         next({path:'/404'})
    //     })
    // },
} 
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/PostPage';
</style>