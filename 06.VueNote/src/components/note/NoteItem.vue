<template>
    <li class="noteItem">
        <div class="contentWrap" @click="onClickItemPage">
            <h3 class="contentWrapTitle">{{ props.item.title }}</h3>
            <div class="contentWrapContent">
                <p>
                    {{ props.item.content }}
                </p>
            </div>
        </div>
        <div class="contentInfoWrap">
            <div class="dateWrap">
                <span>{{ DATE }}</span>
                <span v-if="item.update">최근 수정</span>
            </div>
            <div class="btnWrap">
                <button class="xi-pen-o" @click="onClickEditPage"></button>
                <button
                    class="xi-minus-square-o"
                    @click="onClickRemove"
                ></button>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { NoteItems } from '@/store/types';
import type { PropType } from 'vue';
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
const { REMOVE_NOTE, GET_NOTE } = item;
const DATE = useDate(props.item.date);
const onClickItemPage = () => {
    router.push(`/note/${props.item.id}`);
};
const onClickEditPage = () => {
    router.push(`/edit/${props.item.id}`);
};
const onClickRemove = async () => {
    await REMOVE_NOTE(props.item.id);
    GET_NOTE();
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NoteItem';
</style>
