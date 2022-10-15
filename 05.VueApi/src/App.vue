<template>
    <div>
        <CommonNav />
        <div class="pageWrap">
            <RouterView :key="$route.path" />
        </div>
        <CommonFooter />
        <CommonLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonFooter from './components/common/CommonFooter.vue';
import CommonLoading from './components/common/CommonLoading.vue';
import CommonNav from './components/common/CommonNav.vue';

export default defineComponent({
    components: {
        CommonFooter,
        CommonLoading,
        CommonNav,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
