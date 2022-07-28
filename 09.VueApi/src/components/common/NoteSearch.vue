<template>
    <div>
        <form>
            <input type="text" placeholder="검색할 단어를 입력해 주세요" />
            <button type="submit" class="xi-arrow-right"></button>
        </form>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteSearch';
</style>
