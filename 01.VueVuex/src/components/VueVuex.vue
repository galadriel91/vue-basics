<template>
    <div class="number">{{ NUMBER }}</div>
    <div class="btnWrap">
        <button @click="onClickPlus">+</button>
        <button @click="onClickMinus">-</button>
    </div>
</template>

<script setup>

    import { computed } from 'vue';
    import { useStore } from "vuex";

    const store = useStore()
    
    const NUMBER = computed(()=>store.state.number)
    const onClickPlus = () => {
        store.commit('ADD_NUM')
    }
    const onClickMinus = () => {
        store.commit('MINUS_NUM')
    }

</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/VueVuex';
</style>