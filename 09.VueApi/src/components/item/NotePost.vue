<template>
    <div class="postWrap">
        <div class="postLeft">
            <div class="titleWrap">
                <h2>{{ item.title }}</h2>
            </div>
            <div class="contentWrap">
                <p>{{ item.content }}</p>
                <div class="dateWrap">
                    <span>{{ DATE }}</span>
                    <span v-if="item.update">수정</span>
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

<script>
import { useDate } from '@/composables/useDate';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
export default {
    props: {
        item: {
            type: Object,
            required: false,
        },
    },
    setup(props) {
        const store = useStore();
        const { removeNote } = store;
        const router = useRouter();
        const DATE = useDate(props.item);
        const onClickMain = () => {
            router.push('/');
        };
        const onClickEdit = () => {
            router.push(`/edit/${props.item.id}`);
        };
        const onClickRemove = () => {
            const result = confirm('노트를 삭제하시겠습니까?');
            if (result) {
                removeNote(props.item.id)
                    .then(() => {
                        router.push('/');
                    })
                    .catch(() => {
                        router.push('/404');
                    });
            }
        };
        return {
            onClickMain,
            onClickEdit,
            onClickRemove,
            DATE,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/item/NotePost';
</style>
