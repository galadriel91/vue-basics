<template>
    <div>
        <NoteHeader />
        <NoteFooter />
    </div>
</template>

<script>
import NoteHeader from '@/components/common/NoteHeader.vue';
import NoteFooter from '@/components/common/NoteFooter.vue';
export default {
    components: {
        NoteHeader,
        NoteFooter,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
