<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">
            <h2>{{message}}</h2>
        </div>
        <div>
            <p>시도횟수: <strong>{{tries.length}}회</strong> , 평균반응속도: <strong>{{AVERAGE}}초</strong></p>
            <button class="xi-refresh" v-if="tries.length" @click="onClickReset"></button>
        </div>
    </div>
</template>

<script>
let startTime = ''
let endTime = ''
let timeout = ''
export default {
    data(){
        return{
            state:'waiting',
            message:'클릭해서 시작해 주세요',
            tries:[]
        }
    },
    methods:{
        onClickReset(){
            clearTimeout(timeout)
            this.state = 'waiting'
            this.message = '클릭해서 시작해 주세요'
            this.tries = []
        },
        onClickScreen(){
            if(this.state === 'waiting'){
                this.state = 'ready'
                this.message = '초록색으로 바뀌면 클릭하세요'
                timeout = setTimeout(()=>{
                    this.state = 'now'
                    this.message = '지금 클릭!'
                    startTime = Date.now()
                },(Math.random() * 1000) + 2000)
            }else if(this.state === 'ready'){
                clearTimeout(timeout)
                this.state = 'waiting'
                this.message = '성급하셨네요. 클릭해서 다시 시작하세요'
            }else if(this.state === 'now'){
                this.state = 'waiting'
                this.message = '클릭해서 시작해 주세요'
                endTime = Date.now()
                this.tries.push( endTime - startTime )
            }
        }
    },
    computed:{
        AVERAGE(){
            if(((this.tries.reduce((a,b)=>a+b , 0) / this.tries.length) * 0.001).toFixed(2) === "NaN"){
                return 0
            }else{
                return ((this.tries.reduce((a,b)=>a+b , 0) / this.tries.length) * 0.001).toFixed(2)
            }
        }
    },
    beforeDestroy(){
        clearTimeout(timeout)
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/ResponsiveTest';
</style>