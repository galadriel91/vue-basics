<template>
    <div>
        <RouterNav/>
        <div class="container">
            <RouterView/>
        </div>
        App
    </div>
</template>

<script>
import RouterNav from 'Components/RouterNav.vue';
export default {
    components:{
        RouterNav
    }
}
</script>

<style lang="scss">
    @import 'Style/index';
</style>