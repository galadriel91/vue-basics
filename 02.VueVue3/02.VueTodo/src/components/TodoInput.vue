<template>
    <form @submit.prevent="onSubmitForm">
        <input type="text" placeholder="오늘 해야할 일을 입력해 주세요" v-model="value" ref="input">
        <button class="xi-arrow-right" type="submit"></button>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const value = ref('')
        const input = ref('')
        const onSubmitForm = () => {
            if(value.value.length){
                store.commit('ADD_TODO' , {
                    id:Date.now(),
                    content:value.value,
                    isCheck:false
                })
                value.value = ''                    
                input.value.focus()
            }else{
                alert('다시 한번 확인 해 주세요')
                input.value.focus()
            }
        }
        return{
            value , onSubmitForm , input
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TodoInput';
</style>