<template>
    <div>
        <CliNav/>
        <div>

        </div>
        <CliFooter/>
    </div>
</template>

<script>
    import CliNav from '@/components/common/CliNav.vue';
    import CliFooter from '@/components/common/CliFooter.vue';
    export default {
        components:{
            CliNav,
            CliFooter
        }
    }
</script>

<style lang="scss">
    @import '@/assets/scss/index';
</style>