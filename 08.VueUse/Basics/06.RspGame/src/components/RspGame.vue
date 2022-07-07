<template>
    <div>
        <div class="screen" :style="{background:`url(${require('Image/rsp.png')})no-repeat ${nowCode} -100px`}"></div>
        <div class="buttonWrap">
            <button @click="onClickChoice('바위')">바위</button>
            <button @click="onClickChoice('보')">보</button>
            <button @click="onClickChoice('가위')">가위</button>
        </div>
        <div class="infoWrap" v-if="result">
            <div class="pickWrap">
                <p>유저 : <strong>{{playerPick}}</strong></p>
                <p>컴퓨터 : <strong>{{cpuPick}}</strong></p>
            </div>
            <div class="resultWrap">
                <p>{{result}}</p>
                <span>점수 : <strong>{{score}}</strong>점</span>
                <button class="xi-redo" @click="onClickReset"></button>
            </div>
        </div>
    </div>
</template>

<script>
const rspCode = {
    바위 : '-45px',
    보 : '-354px',
    가위 : '-664px'
}

const point = {
    바위 : 1,
    보: 0,
    가위 : -1
}

const whatCpuPick = (value) => {
    return Object.entries(rspCode).find(v=>{
        if(v[1] === value){
            return v
        }
    })[0]
}
let timeout = ''
let interval = ''

export default {
    data(){
        return{
            nowCode:rspCode.바위,
            result:'',
            playerPick:'',
            cpuPick:'',
            score:0
        }
    },
    methods:{
        onChangeScreen(){
            if(this.nowCode === rspCode.바위){
                this.nowCode = rspCode.보
            }else if(this.nowCode === rspCode.보){
                this.nowCode = rspCode.가위
            }else if(this.nowCode === rspCode.가위){
                this.nowCode = rspCode.바위
            }
        },
        onClickChoice(choice){
            this.playerPick = choice
            this.cpuPick = whatCpuPick(this.nowCode)

            let playerScore = point[this.playerPick]
            let cpuScore = point[this.cpuPick]
            let diff = playerScore - cpuScore

            if([-1,2].includes(diff)){
                this.result = '플레이어 승리!'
                this.score++
            }else if(diff === 0){
                this.result = '무승부!'
            }else{
                this.result = 'CPU 승리!'
                this.score--
            }
            clearInterval(interval)
            clearTimeout(timeout)
            timeout = setTimeout(()=>{
                interval = setInterval(this.onChangeScreen , 100)
            },1000)
        },
        onClickReset(){
            clearInterval(interval)
            clearTimeout(timeout)
            this.nowCode = rspCode.바위,
            this.playerPick = '',
            this.cpuPick = '',
            this.result = '',
            this.score = 0
            interval = setInterval(this.onChangeScreen , 100)
        },
    },
    mounted(){
        interval = setInterval(this.onChangeScreen , 100)
    },
    beforeDestroy(){
        clearInterval(interval)
        clearTimeout(timeout)
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/RspGame';
</style>