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
import { useChoice } from '../composable/whatChoice'
import { ref , onMounted , onBeforeUnmount } from 'vue'
export default {
    setup(){
        const { rspCode , point , whatCpuPick} = useChoice()
        let timeout = ''
        let interval = ''
        const nowCode = ref(rspCode.바위)
        const result = ref('')
        const playerPick = ref('')
        const cpuPick = ref('')
        const score = ref(0)

        const onChangeScreen = () => {
            if(nowCode.value === rspCode.바위){
                nowCode.value = rspCode.보
            }else if(nowCode.value === rspCode.보){
                nowCode.value = rspCode.가위
            }else if(nowCode.value === rspCode.가위){
                nowCode.value = rspCode.바위
            }
        }

        const onClickChoice = (choice) => {
            playerPick.value = choice
            cpuPick.value = whatCpuPick(nowCode.value)

            let playerScore = point[playerPick.value]
            let cpuScore = point[cpuPick.value]
            let diff = playerScore - cpuScore

            if([-1,2].includes(diff)){
                result.value = '플레이어 승리!'
                score.value++
            }else if(diff === 0){
                result.value = '무승부!'
            }else{
                result.value = 'CPU 승리!'
                score.value--
            }
            clearInterval(interval)
            clearTimeout(timeout)
            timeout = setTimeout(()=>{
                interval = setInterval(onChangeScreen , 100)
            },1000)
        }

        const onClickReset = () => {
            clearInterval(interval)
            clearTimeout(timeout)
            nowCode.value = rspCode.바위,
            playerPick.value = '',
            cpuPick.value = '',
            result.value = '',
            score.value = 0
            interval = setInterval(onChangeScreen , 100)
        }

        onMounted(()=>{
            interval = setInterval(onChangeScreen , 100)
        })

        onBeforeUnmount(()=>{
            clearInterval(interval)
            clearTimeout(timeout)
        })

        return { nowCode , result , playerPick , cpuPick , score , onChangeScreen , onClickChoice , onClickReset}
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/RspGame';
</style>