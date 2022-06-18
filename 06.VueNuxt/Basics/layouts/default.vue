<template>
    <div>
        <NuxtHeader/>
        <NuxtFooter/>
    </div>
</template>

<script>
    import NuxtHeader from '@/components/common/NuxtHeader.vue';
    import NuxtFooter from '@/components/common/NuxtFooter.vue';
    export default {
        components:{
            NuxtHeader,
            NuxtFooter
        }
    }
</script>

<style lang="scss">

</style>