import { createStore } from 'vuex'

export const store = createStore({
    state:{
        gameTable:[['','',''],['','',''],['','','']],
        turn:'O',
        result:''
    },
    mutations:{
        CHANGE_TURN(state){
            state.turn = state.turn === 'O' ? 'X' : 'O' 
        },
        CLICK_TD(state , {row , cell}){
            state.result = ''
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
    },
    actions:{

    }
})