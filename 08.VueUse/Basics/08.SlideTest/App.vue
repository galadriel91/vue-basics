<template>
    <div class="container">
        <SlideNav/>
        <SlideTest/>
    </div>
</template>

<script>
import SlideNav from 'Components/SlideNav.vue';
import SlideTest from 'Components/SlideTest.vue';
export default {
    components:{
        SlideNav,
        SlideTest
    }
}
</script>

<style lang="scss">
    @import 'Style/index';
</style>