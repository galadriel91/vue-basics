<template>
    <div class="userContainer">
        <UserItem :item="USERITEM" v-if="USERITEM">
            <h4 slot="userName">User : {{USERITEM.id}}</h4>
            <span slot="userTime">Created : {{USERITEM.created}}</span>
            <p slot="userPoints">Karma : {{USERITEM.karma}}</p>
        </UserItem>
    </div>
</template>

<script>
import UserItem from '@/components/user/UserItem.vue';
import mixins from '@/utils/mixins'
export default {
    components:{
        UserItem
    },
    computed:{
        USERITEM(){
            return this.$store.state.user
        }
    },
    mixins:[mixins]
//    beforeRouteUpdate (to, from, next) {
//         this.$store.commit('ON_LOADING')
//         this.$store.dispatch(`FETCH_${to.name}` , to.params.id)
//         .then(()=>{
//             if(this.USERITEM == null){
//                 next({path:'/404'})
//             }else{
//                 next()
//             }
//         })
//         .catch((err)=>{
//              console.log(err)
//             next({path:'/404'})
//         })
//     },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/UserPage';
</style>