<template>
    <div>
        <h1>Vue Vuex Setting</h1>
        <img :src="require('Images/vuex.png')" alt="Vuex 로고">
        <p>
            {{num}}
        </p>
        <div>
            <button @click="onClickPlusNum">Plus</button>
            <button @click="onClickMinusNum">Minus</button>
        </div>
    </div>
</template>

<script>
import { usePinia } from 'Store/index'
import { storeToRefs } from 'pinia';
export default {
    setup(){
        const pinia = usePinia();
        const {num} = storeToRefs(pinia)
        const {ADD_NUM , MINUS_NUM} = pinia
        const onClickPlusNum = () => {
            ADD_NUM()
        }
        const onClickMinusNum = () => {
            MINUS_NUM()
        }
        return{ num , onClickPlusNum , onClickMinusNum}
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/pages/VuexPage';
</style>