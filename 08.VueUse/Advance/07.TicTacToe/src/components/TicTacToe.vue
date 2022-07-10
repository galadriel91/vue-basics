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
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    components:{
        TicTable
    },
    setup(){
        const store = useStore()
        const TURN = computed(()=>{
            return store.state.turn
        })
        const RESULT = computed(()=>{
            return store.state.result
        })
        return { TURN , RESULT}
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TicTacToe';
</style>