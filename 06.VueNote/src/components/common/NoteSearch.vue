<template>
    <div>
        <form @submit.prevent="onSubmitForm">
            <input
                type="text"
                placeholder="검색할 단어를 입력해 주세요"
                v-model="searchValue"
            />
            <button type="submit" class="xi-arrow-right"></button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useItem } from '@/store/itemStore';

const router = useRouter();
const item = useItem();

const searchValue = ref('');

const { CHANGE_PAGE } = item;

const onSubmitForm = () => {
    if (searchValue.value.length) {
        CHANGE_PAGE(1);
        router.push(`/search/${searchValue.value}`);
        searchValue.value = '';
    } else {
        alert('검색어를 입력해 주세요');
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteSearch';
</style>
