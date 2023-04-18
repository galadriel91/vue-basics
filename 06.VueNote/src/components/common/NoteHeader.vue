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
import { useHeader } from '@/composables/useHeader';
import { useRouter, useRoute } from 'vue-router';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';

const router = useRouter();
const route = useRoute();
const item = useItem();
const { notes } = storeToRefs(item);
const headerName = ref(useHeader());

const showBtns = computed(() => {
    // 생성 페이지가 아니어야함
    const name = route.name;
    return name !== 'create' && notes.value.length > 0;
});

const search = computed(() => {
    return route.name === 'search';
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
