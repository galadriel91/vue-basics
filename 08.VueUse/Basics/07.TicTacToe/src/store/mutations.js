import Vue from "vue"

export default{
    CHANGE_TURN(state){
        state.turn = state.turn === 'O' ? 'X' : 'O' 
    },
    CLICK_TD(state , {row , cell}){
        state.result = ''
        Vue.set( state.gameTable[row] , cell , state.turn )
        state.gameTable[row][cell] = state.turn
        
    },
    SET_WINNER(state){
        state.result = `${state.turn}님의 승리입니다.`
        state.gameTable = [['','',''],['','',''],['','','']]
        state.turn = 'O'
    },
    SET_DRAW(state){
        state.result = `무승부 입니다!`
        state.gameTable = [['','',''],['','',''],['','','']]
        state.turn = 'O'
    }
}