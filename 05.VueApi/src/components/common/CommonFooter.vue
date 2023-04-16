<template>
    <footer>
        <div class="footerWrap">
            <h2>© {{ YEAR }} LEE MOON SEOB</h2>
            <a
                href="https://github.com/galadriel91"
                target="_blank"
                class="xi-github"
            ></a>
        </div>
    </footer>
</template>

<script setup lang="ts">

    import { computed, type ComputedRef } from 'vue';
    
    const YEAR: ComputedRef<number> = computed(() =>
        new Date().getFullYear(),
    );
    
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/CommonFooter';
</style>
