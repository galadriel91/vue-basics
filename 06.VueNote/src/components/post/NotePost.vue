<template>
    <div class="postWrap">
        <div class="postLeft">
            <div class="titleWrap">
                <h2>{{ props.item.title }}</h2>
            </div>
            <div class="contentWrap">
                <p>{{ props.item.content }}</p>
                <div class="dateWrap">
                    <span>{{ DATE }}</span>
                    <span v-if="props.item.update">수정</span>
                    <span v-else>작성</span>
                </div>
            </div>
        </div>
        <div class="postRight">
            <button @click="onClickMain">이전</button>
            <div class="buttonWrap">
                <button @click="onClickEdit">수정</button>
                <button @click="onClickRemove">삭제</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { NoteItems } from '@/store/types';
import { useDate } from '@/composables/useDate';
import { useItem } from '@/store/itemStore';
import { useRouter } from 'vue-router';

const props = defineProps({
    item: {
        type: Object as PropType<NoteItems>,
        required: true,
    },
});
const router = useRouter();
const item = useItem();
const DATE = useDate(props.item.date);

const { REMOVE_NOTE } = item;

const onClickMain = () => {
    router.go(-1);
};

const onClickEdit = () => {
    router.push(`/edit/${props.item.id}`);
};

const onClickRemove = async () => {
    const result = confirm('노트를 삭제하시겠습니까?');
    if (result) {
        await REMOVE_NOTE(props.item.id);
        onClickMain();
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/item/NotePost';
</style>
