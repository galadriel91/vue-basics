<template>
    <div class="loadingWrap" v-if="loading">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    props:{
        loading:{
            type:Boolean,
            required:true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/common/NuxtLoading';
</style>