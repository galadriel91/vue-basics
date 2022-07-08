<template>
    <div>
        <TicTable/>
        <div class="turnWrap">
            <strong>{{TURN}}</strong>님의 턴입니다.
        </div>
        <div class="resultWrap">
            {{RESULT}}
        </div>
    </div>
</template>

<script>
import TicTable from 'Components/TicTable.vue';
export default {
    components:{
        TicTable
    },
    computed:{
        TURN(){
            return this.$store.state.turn
        },
        RESULT(){
            return this.$store.state.result
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TicTacToe';
</style>