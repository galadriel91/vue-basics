<template>
    <div class="loadingContainer" v-if="loading">
        <div class="lds-facebook">
            <div>
            </div>
            <div>
            </div>
            <div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/common/CliLoading';
</style>