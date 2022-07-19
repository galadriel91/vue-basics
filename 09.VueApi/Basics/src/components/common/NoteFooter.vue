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

<script>
import { computed } from 'vue';
export default {
    setup() {
        const YEAR = computed(() => {
            return new Date().getFullYear();
        });
        return { YEAR };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteFooter';
</style>
