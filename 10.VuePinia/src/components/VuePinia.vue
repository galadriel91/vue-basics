<template>
    <div>
        <h1>Vue Vuex Setting</h1>
        <img :src="require('Images/vuex.png')" alt="Vuex 로고">
        <p>
            {{NUMBER}}
        </p>
        <div>
            <button @click="onClickPlusNum">Plus</button>
            <button @click="onClickMinusNum">Minus</button>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { usePinia } from 'Store/index'
import { storeToRefs } from 'pinia'
export default {
    setup(){
        const store = usePinia()
        const { num } = storeToRefs(store)
        const { ADD_NUM , MINUS_NUM} = store
        const NUMBER = computed(()=>num)
        
        const onClickPlusNum = () => {
            ADD_NUM()
        }
        const onClickMinusNum = () => {
            MINUS_NUM()
        }
        return{
            NUMBER,
            onClickPlusNum,
            onClickMinusNum
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/VueVuex';
</style>