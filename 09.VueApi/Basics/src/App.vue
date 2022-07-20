<template>
    <div>
        <NoteHeader />
        <div>
            <RouterView />
        </div>
        <NoteFooter />
        <NoteLoading />
    </div>
</template>

<script>
import NoteHeader from '@/components/common/NoteHeader.vue';
import NoteFooter from '@/components/common/NoteFooter.vue';
import NoteLoading from '@/components/common/NoteLoading.vue';
export default {
    components: {
        NoteHeader,
        NoteFooter,
        NoteLoading,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
</style>
