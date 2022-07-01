<template>
    <div>
        <div class="numberWrap">
            <strong>{{first}}</strong> X <strong>{{second}}</strong> = <strong>?</strong>
        </div>
        <form @submit.prevent="onSubmitForm">
            <input type="text" placeholder="정답을 입력해 주세요" v-model="value" ref="answer"/>
            <button class="xi-arrow-right" type="submit"></button>
        </form>
        <div class="resultWrap" :class="{correct:isCheck}">{{result}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            first : Math.ceil(Math.random() * 9),
            second : Math.ceil(Math.random() * 9),
            value : '',
            result : '',
            isCheck : false,
        }
    },
    methods:{
        onSubmitForm(){
            if(this.value.length){
                if(this.first * this.second === parseInt(this.value)){
                    this.first = Math.ceil(Math.random() * 9)
                    this.second = Math.ceil(Math.random() * 9)
                    this.value = ''
                    this.result = '정답! 계속 진행하세요'
                    this.isCheck = true
                    this.$refs.answer.focus()
                }else{
                    this.value = ''
                    this.result = '다시 한번 생각해 보세요'
                    this.isCheck = false
                    this.$refs.answer.focus()
                }
            }else{
                this.value = ''
                this.result = '정답을 입력해 주세요!'
                this.isCheck = false
                this.$refs.answer.focus()
            }
        },
    },
    mounted(){
        this.$refs.answer.focus()
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TimesTable';
</style>