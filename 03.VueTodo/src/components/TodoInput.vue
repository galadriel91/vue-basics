<template>
    <form @submit.prevent="onSubmitForm">
        <input type="text" placeholder="오늘 해야할 일을 입력해 주세요" v-model="value" ref="input">
        <button class="xi-arrow-right" type="submit"></button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            value:'',
        }
    },
    methods:{
        // onSubmitForm(){
        //     if(this.value.length){
        //         this.$store.commit('ADD_TODO' , {
        //             id:Date.now(),
        //             content:this.value,
        //             isCheck:false
        //         })
        //         this.value = ''
        //         this.$refs.input.focus()
        //     }else{
        //         alert('다시 한번 확인 해 주세요')
        //         this.$refs.input.focus()
        //     }
        // }
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TodoInput';
</style>