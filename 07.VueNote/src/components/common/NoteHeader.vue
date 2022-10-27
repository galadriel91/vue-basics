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
            v-show="!showBtns"
        ></button>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useHeader } from '@/composables/useHeader';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const headerName = ref(useHeader());
        const showBtns = computed(() => {
            const name = route.name;
            return name === 'create';
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
