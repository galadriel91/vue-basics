<template>
    <table>
        <TicTr v-for="(rowItem , rowIndex) in GAMETABLE" :key="rowIndex" :rowItem="rowItem" :rowIndex="rowIndex"/>
    </table>
</template>

<script>
import TicTr from 'Components/TicTr.vue';
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    components:{
        TicTr
    },
    setup(){
        const store = useStore()
        const GAMETABLE = computed(()=>{
            return store.state.gameTable
        })
        return { GAMETABLE }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TicTable';
</style>