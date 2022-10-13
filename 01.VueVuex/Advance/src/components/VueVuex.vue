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
import { useStore } from "vuex";
export default {
    setup(){
        const store = useStore()
        const NUMBER = computed(()=>store.state.number)
        
        const onClickPlusNum = () => {
            store.commit('ADD_NUM')
        }
        const onClickMinusNum = () => {
            store.commit('MINUS_NUM')
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