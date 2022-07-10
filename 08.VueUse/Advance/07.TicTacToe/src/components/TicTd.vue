<template>
    <td @click="onClickTd">
        {{cellItem}}
    </td>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    props:{
        cellItem:{
            type:String,
            requied:true
        },
        rowIndex:{
            type:Number,
            requied:true
        },
        cellIndex:{
            type:Number,
            requied:true
        }
    },
    setup(props){
        const store = useStore()
        const GAMETABLE = computed(()=>{
            return store.state.gameTable
        })
        const TURN = computed(()=>{
            return store.state.turn
        })

        const onClickTd = () => {
            const { rowIndex , cellIndex , cellItem } = props;
            let win = false;
            if(cellItem){
                return
            }
            store.commit('CLICK_TD' , {
                row:rowIndex,
                cell:cellIndex
            })
            if(GAMETABLE.value[rowIndex][0] === TURN.value && GAMETABLE.value[rowIndex][1] === TURN.value && GAMETABLE.value[rowIndex][2] === TURN.value){
                win = true
            }
            if(GAMETABLE.value[0][cellIndex] === TURN.value && GAMETABLE.value[1][cellIndex] === TURN.value && GAMETABLE.value[2][cellIndex] === TURN.value){
                win = true
            }
            if(GAMETABLE.value[0][0] === TURN.value && GAMETABLE.value[1][1] === TURN.value && GAMETABLE.value[2][2] === TURN.value){
                win = true
            }
            if(GAMETABLE.value[2][0] === TURN.value && GAMETABLE.value[1][1] === TURN.value && GAMETABLE.value[0][2] === TURN.value){
                win = true
            }
            if(win){
                store.commit('SET_WINNER')
            }else{
                let all = true
                GAMETABLE.value.forEach((rowItem)=>{
                    rowItem.forEach(cellItem => {
                        if(!cellItem){
                            all = false
                        }
                    })
                })
                if(all){
                    store.commit('SET_DRAW')
                }else{
                    store.commit('CHANGE_TURN')
                }
            } 
        }

        return{ GAMETABLE , TURN , onClickTd }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TicTd';
</style>