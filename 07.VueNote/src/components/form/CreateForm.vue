<template>
    <div class="inputWrap">
        <form @submit.prevent="onSubmitForm">
            <div class="formWrap">
                <div>
                    <label for="title">제목</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="제목을 입력해 주세요"
                        v-model="title"
                        ref="titleInput"
                    />
                </div>
                <div>
                    <label for="content">내용</label>
                    <textarea
                        id="content"
                        placeholder="내용을 입력해 주세요"
                        v-model="content"
                    ></textarea>
                </div>
            </div>
            <div class="buttonWrap">
                <button type="button" @click="onClickMain">취소</button>
                <button type="submit">저장</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useItem } from '@/store/itemStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const item = useItem();
        const { ADD_NOTES } = item;
        const title = ref('');
        const content = ref('');
        const titleInput = ref<HTMLInputElement | null>(null);
        const onSubmitForm = () => {
            if (title.value.length && content.value.length) {
                ADD_NOTES({
                    id: Date.now(),
                    title: title.value,
                    content: content.value,
                    date: new Date(),
                    update: false,
                });
                onClickMain();
            } else {
                alert('다시 한번 확인해 주세요');
            }
        };
        const onClickMain = () => {
            router.push('/');
        };
        onMounted(() => {
            titleInput.value?.focus();
        });
        return {
            title,
            titleInput,
            content,
            onSubmitForm,
            onClickMain,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/NoteForm';
</style>
