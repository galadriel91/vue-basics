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
export default {
    computed:{
        NUMBER(){
            return this.$store.state.number
        }
    },
    methods:{
        onClickPlusNum(){
            this.$store.commit('ADD_NUM')
        },
        onClickMinusNum(){
            this.$store.commit('MINUS_NUM')
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/VueVuex';
</style>