<template>
    <div>
        <h1>{{title}}</h1>
        <img :src="require('Images/webpack.png')" alt="웹팩 로고">
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const title = ref('Vue Webpack Setting')
        
        return { title }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/VueWebpack';
</style>