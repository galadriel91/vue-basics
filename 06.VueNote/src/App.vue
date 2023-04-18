<template>
    <div class="container">
        <RouterView />
        <NoteLoading />
    </div>
</template>

<script setup lang="ts">
import NoteLoading from './components/common/NoteLoading.vue';
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
