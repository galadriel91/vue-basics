<template>
    <header>
        <button
            class="xi-long-arrow-left"
            @click="onClickBefore"
            v-show="search"
        ></button>
        <h1>{{ headerName }}</h1>
        <button
            class="xi-plus"
            @click="onClickCreate"
            v-show="showBtns"
        ></button>
    </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { useItem } from '@/store/itemStore';
import { useHeader } from '@/composables/useHeader';

const router = useRouter();
const route = useRoute();
const item = useItem();
const headerName = ref(useHeader());

const { notes } = storeToRefs(item);

const showBtns = computed(() => {
    // 생성 페이지가 아니어야함
    const name = route.meta.title;
    return name !== 'Create' && notes.value.length > 0;
});

const search = computed(() => {
    return route.meta.title === 'Search';
});

const onClickCreate = () => {
    router.push('/create');
};

const onClickBefore = () => {
    router.go(-1);
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteHeader';
</style>
