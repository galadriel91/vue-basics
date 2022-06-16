<template>
    <div class="lds-facebook" v-if="loading">
        <div>
        </div>
        <div>
        </div>
        <div>
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