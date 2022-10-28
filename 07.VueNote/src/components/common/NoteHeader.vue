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

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useHeader } from '@/composables/useHeader';
import { useRouter, useRoute } from 'vue-router';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const item = useItem();
        const { notes } = storeToRefs(item);
        const router = useRouter();
        const route = useRoute();
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

        return {
            headerName,
            showBtns,
            onClickCreate,
            onClickBefore,
            search,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteHeader';
</style>
