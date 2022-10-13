<template>
    <div>
        <h1>Vue Webpack Setting</h1>
        <img :src="require('Images/webpack.png')" alt="웹팩 로고">
        <div class="numberWrap">
            <div>{{number}}</div>
            <button class="plusBtn" @click="onClickPlus">Plus</button>
            <button class="minusBtn" @click="onClickMinus">Minus</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            number:0
        }
    },
    methods:{
        onClickPlus(){
            this.number++
        },
        onClickMinus(){
            this.number--
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/VueWebpack';
</style>