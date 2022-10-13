<template>
    <div>
        <h1>{{title}}</h1>
        <img :src="require('Images/webpack.png')" alt="웹팩 로고">
        <div class="numberWrap">
            <div>{{number}}</div>
            <button class="plusBtn" @click="onClickPlus">Plus</button>
            <button class="minusBtn" @click="onClickMinus">Minus</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const title = ref('Vue Webpack Setting')
        const number = ref('0')

        const onClickPlus = () => {
            number.value++
        }
        const onClickMinus = () => {
            number.value--
        }

        return { title, number , onClickMinus , onClickPlus }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/VueWebpack';
</style>