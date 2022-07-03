<template>
    <div>
        <div class="resultWrap">{{result}}</div>
        <form @submit.prevent="onSubmitForm">
            <input type="number" placeholder="네자리 숫자를 입력해 주세요" v-model="value" ref="answer" @input="onInputForm" maxlength="4">
            <button class="xi-arrow-right" type="submit"></button>
        </form>
        <ul>
            <NumberItem v-for="item in tries" :item="item" :key="item.index"/>            
        </ul>
    </div>
</template>

<script>
const getNumber = () => {
    const candidate = [1,2,3,4,5,6,7,8,9]
    const shupple = []
    for(let i = 0 ; i < 4 ; i++){
        const choice = candidate.splice(Math.floor(Math.random() * candidate.length) , 1)[0]
        shupple.push(choice)
    }
    return shupple
}
import NumberItem from 'Components/NumberItem.vue';
export default {
    components:{
        NumberItem
    },
    data(){
        return{
            numbers : getNumber(),
            value : '',
            result: '',
            tries:[]
        }
    },
    methods:{
        onInputForm(){
            this.result = ''
        },
        onSubmitForm(){
            if(this.value.length === 4){
                if(this.value === this.numbers.join('')){
                    this.result = '홈런입니다!'
                    this.value = ''
                    this.tries = []
                    this.numbers = getNumber()
                    this.$refs.answer.focus()
                }else{
                    if(this.tries.length >= 9){
                        this.result = `횟수를 초과했습니다. 정답은 ${this.numbers.join('')} 이었습니다.`;
                        this.value = ''
                        this.tries = []
                        this.numbers = getNumber()
                        this.$refs.answer.focus()
                    }else{
                        let strike = 0;
                        let ball = 0;
                        const valueArray = this.value.split('').map(v=>parseInt(v))
                        for(let i = 0; i < 4 ; i++){
                            if(valueArray[i] === this.numbers[i]){
                                strike++
                            }else if(this.numbers.includes(valueArray[i])){
                                ball++
                            }
                        }
                        this.tries.unshift({
                            index:this.tries.length + 1,
                            tries:this.value,
                            result:`${strike}스트라이크 , ${ball}볼 입니다.`
                        })
                        this.value = ''
                        this.$refs.answer.focus()
                    }
                }
            }else{
                this.result = '네자리 숫자를 입력해 주세요!'
                this.value = ''
                this.$refs.answer.focus()
            }
        }
    },
    mounted(){
        this.$refs.answer.focus()
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/NumberBaseball';
</style>