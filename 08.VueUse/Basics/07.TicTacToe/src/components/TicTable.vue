<template>
    <table>
        <TicTr v-for="(rowItem , rowIndex) in GAMETABLE" :key="rowIndex" :rowItem="rowItem" :rowIndex="rowIndex"/>
    </table>
</template>

<script>
import TicTr from 'Components/TicTr.vue';
export default {
    components:{
        TicTr
    },
    computed:{
        GAMETABLE(){
            return this.$store.state.gameTable
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TicTable';
</style>