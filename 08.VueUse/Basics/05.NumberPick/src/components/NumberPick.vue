<template>
    <div>
        <div class="startWrap" v-if="isStart">
            <h2>버튼을 눌러서 번호를 뽑아 주세요</h2>
            <button class="xi-play" @click="onClickStart"></button>
        </div>
        <div class="numberWrap" v-else>
            <NumberBall v-for="(item , i) in numberBall" :item="item" :key="i"/>
        </div>
        <div class="bonusWrap" v-if="bonus">
            <h3>보너스!</h3>
            <NumberBall :item="bonus"/>
            <button class="xi-redo" @click="onClickReset"></button>
        </div>
    </div>
</template>

<script>
import NumberBall from 'Components/NumberBall.vue';
const getNumber = () => {
    const candidate = Array(45).fill('').map((v,i)=>v = i+1);
    const shupple = []
    while(0 < candidate.length){
        const choice = candidate.splice(Math.floor(Math.random() * candidate.length) , 1)[0]
        shupple.push(choice)
    }
    return [...shupple.slice(0,6) , shupple[shupple.length - 1]]
}
let timeout = []
export default {
    components:{
        NumberBall
    },
    data(){
        return{
            isStart:true,
            getBall:getNumber(),
            numberBall:[],
            bonus:''
        }
    },
    methods:{
        onClickReset(){
            this.getBall = getNumber(),
            this.numberBall = [],
            this.bonus = ''
            this.onClickStart()
        },
        onClickStart(){
            this.isStart = false;
            for(let i = 0 ; i < 6 ; i++){
                timeout[i] = setTimeout(()=>{
                    this.numberBall.push(this.getBall[i])
                }, (i + 1) * 1000)
            }
            timeout[6] = setTimeout(()=>{
                this.bonus = this.getBall[this.getBall.length - 1]
            },7000)
        }
    },
    beforeDestroy(){
        timeout.forEach(v=>clearTimeout(v))
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/NumberPick';
</style>