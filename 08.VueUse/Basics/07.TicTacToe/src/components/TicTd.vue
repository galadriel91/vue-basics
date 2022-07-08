<template>
    <td @click="onClickTd">
        {{cellItem}}
    </td>
</template>

<script>
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
    computed:{
        GAMETABLE(){
            return this.$store.state.gameTable  
        },
        TURN(){
            return this.$store.state.turn
        }
    },
    methods:{
        onClickTd(){
            const { rowIndex , cellIndex , cellItem , GAMETABLE , TURN } = this;
            let win = false;
            if(cellItem){
                return
            }
            this.$store.commit('CLICK_TD' , {
                row:rowIndex,
                cell:cellIndex
            })
            if(GAMETABLE[rowIndex][0] === TURN && GAMETABLE[rowIndex][1] === TURN && GAMETABLE[rowIndex][2] === TURN){
                win = true
            }
            if(GAMETABLE[0][cellIndex] === TURN && GAMETABLE[1][cellIndex] === TURN && GAMETABLE[2][cellIndex] === TURN){
                win = true
            }
            if(GAMETABLE[0][0] === TURN && GAMETABLE[1][1] === TURN && GAMETABLE[2][2] === TURN){
                win = true
            }
            if(GAMETABLE[2][0] === TURN && GAMETABLE[1][1] === TURN && GAMETABLE[0][2] === TURN){
                win = true
            }
            if(win){
                this.$store.commit('SET_WINNER')
            }else{
                let all = true
                GAMETABLE.forEach((rowItem)=>{
                    rowItem.forEach(cellItem => {
                        if(!cellItem){
                            all = false
                        }
                    })
                })
                if(all){
                    this.$store.commit('SET_DRAW')
                }else{
                    this.$store.commit('CHANGE_TURN')
                }
            } 
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TicTd';
</style>