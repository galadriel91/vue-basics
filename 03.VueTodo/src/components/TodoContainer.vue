<template>
    <ul>

    </ul>
</template>

<script>
export default {
    created(){
        this.$store.commit('GET_TODO')
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TodoContainer';
</style>