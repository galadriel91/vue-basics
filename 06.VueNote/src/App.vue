<template>
    <div class="container">
        <NoteHeader />
        <RouterView />
        <NoteLoading />
    </div>
</template>

<script setup lang="ts">
import NoteHeader from './components/common/NoteHeader.vue';
import NoteLoading from './components/common/NoteLoading.vue';
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
