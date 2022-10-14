<template>
    <div>
        <h1>Vue Pinia Setting</h1>
        <img :src="require('Images/pinia.png')" alt="Pinia 로고">
        <p>
            {{number}}
        </p>
        <div>
            <button @click="onClickPlusNum">Plus</button>
            <button @click="onClickMinusNum">Minus</button>
        </div>
    </div>
</template>

<script>
import { usePinia } from 'Store/index'
import { storeToRefs } from 'pinia'
export default {
    setup(){
        const store = usePinia()
        const { number } = storeToRefs(store)
        const { ADD_NUM , MINUS_NUM} = store
        const onClickPlusNum = () => {
            ADD_NUM()
        }
        const onClickMinusNum = () => {
            MINUS_NUM()
        }
        return{
            number,
            onClickPlusNum,
            onClickMinusNum
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/VueVuex';
</style>