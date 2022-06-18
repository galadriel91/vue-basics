<template>
    <footer>
        <div class="footerWrap">
            <h2>© {{YEAR}} LEE MOON SEOB</h2>
            <a href="https://github.com/galadriel91" target="_blank" class="xi-github"></a>
        </div>
    </footer>
</template>

<script>
export default {
    computed:{
        YEAR(){
            return new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/common/CliFooter';
</style>