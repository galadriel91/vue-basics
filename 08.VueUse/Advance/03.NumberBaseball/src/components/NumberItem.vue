<template>
    <li>
        <p class="listIndex">{{item.index}}</p>
        <div>
            <p>시도 : {{item.tries}}</p>
            <span>{{item.result}}</span>
        </div>
    </li>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/NumberItem';
</style>