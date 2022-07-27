<template>
    <li class="noteItem">
        <div class="contentWrap" @click="onClickItemPage">
            <h3 class="contentWrapTitle">{{ item.title }}</h3>
            <div class="contentWrapContent">
                <p>
                    {{ item.content }}
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
                    @click="onClickRemoveItem"
                ></button>
            </div>
        </div>
    </li>
</template>

<script>
import { useRouter } from 'vue-router';
import { useDate } from '@/composables/useDate';
import { useStore } from '@/store';
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();
        const { removeNote, getNote } = store;
        const DATE = useDate(props.item);
        const router = useRouter();
        const onClickRemoveItem = () => {
            removeNote(props.item.id).then(() => {
                getNote();
            });
        };
        const onClickEditPage = () => {
            router.push(`/edit/${props.item.id}`);
        };
        const onClickItemPage = () => {
            router.push(`/item/${props.item.id}`);
        };
        return {
            onClickRemoveItem,
            onClickEditPage,
            onClickItemPage,
            DATE,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NoteItem';
</style>
