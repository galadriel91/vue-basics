<template>
    <div>
        <NuxtHeader/>
        <div>
            <Nuxt/>
        </div>
        <NuxtFooter/>
        <NuxtLoading :loading="LOADING"/>
    </div>
</template>

<script>
    import NuxtHeader from '@/components/common/NuxtHeader.vue';
    import NuxtFooter from '@/components/common/NuxtFooter.vue';
    import NuxtLoading from '@/components/common/NuxtLoading.vue';
    export default {
        components:{
            NuxtHeader,
            NuxtFooter,
            NuxtLoading
        },
        computed:{
            LOADING(){
                return this.$store.state.isLoading
            }
        },
        middleware:'loading'
    }
</script>

<style lang="scss">

</style>