<template>
    <li class="noteItem">
        <div class="contentWrap">
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
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import { useDate } from '@/composables/useDate';
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const DATE = useDate(props.item);
        const store = useStore();
        const router = useRouter();
        const onClickRemoveItem = () => {};
        const onClickEditPage = () => {
            router.push(`/edit/${props.item.id}`);
        };
        return {
            onClickRemoveItem,
            onClickEditPage,
            DATE,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NoteItem';
</style>
