<template>
    <div>
        <CliNav/>
        <div>
            <RouterView :key="$route.path"/>
        </div>
        <CliFooter/>
        <CliLoading :loading="ISLOADING"/>
    </div>
</template>

<script>
    import CliNav from '@/components/common/CliNav.vue';
    import CliFooter from '@/components/common/CliFooter.vue';
    import CliLoading from '@/components/common/CliLoading.vue';
    import { useStore } from 'vuex'
    import { computed } from 'vue'
    export default {
        components:{
            CliNav,
            CliFooter,
            CliLoading
        },
        setup(){
            const store = useStore()
            const ISLOADING = computed(()=>{
                return store.state.isLoading
            })
            return{
                ISLOADING
            }
        }
    }
</script>

<style lang="scss">
    @import '@/assets/scss/index';
</style>