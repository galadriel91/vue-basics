<template>
    <tr>
        <TicTd v-for="(cellItem , cellIndex) in rowItem" :key="cellIndex" :cellItem="cellItem" :rowIndex="rowIndex" :cellIndex="cellIndex"/>
    </tr>
</template>

<script>
import TicTd from 'Components/TicTd.vue';
export default {
    props:{
        rowItem:{
            type:Array,
            requied:true
        },
        rowIndex:{
            type:Number,
            requied:true
        }
    },
    components:{
        TicTd
    }
}
</script>

<style lang="scss" scoped>

</style>