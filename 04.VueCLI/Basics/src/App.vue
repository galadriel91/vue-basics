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
    export default {
        components:{
            CliNav,
            CliFooter,
            CliLoading
        },
        computed:{
            ISLOADING(){
                return this.$store.state.isLoading
            }
        }
    }
</script>

<style lang="scss">
    @import '@/assets/scss/index';
</style>