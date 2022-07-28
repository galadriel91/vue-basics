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
                <button @click="onClickMain">취소</button>
                <button type="submit">저장</button>
            </div>
        </form>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
export default {
    setup() {
        const router = useRouter();
        const store = useStore();
        const { addNote, getNote } = store;
        // data
        const title = ref('');
        const titleInput = ref('');
        const content = ref('');
        const onClickMain = () => {
            router.push('/');
        };
        const onInitialForm = () => {
            title.value = '';
            content.value = '';
        };
        const onSubmitForm = () => {
            if (title.value.length && content.value.length) {
                addNote({
                    id: Date.now(),
                    title: title.value,
                    content: content.value,
                    date: new Date(),
                    update: false,
                })
                    .then(() => {
                        getNote();
                        onClickMain();
                        onInitialForm();
                    })
                    .catch(err => {
                        router.push('/404');
                    });
            } else {
                alert('다시 한번 확인해 주세요');
            }
        };
        onMounted(() => {
            titleInput.value.focus();
        });
        return { title, content, titleInput, onSubmitForm };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/NoteForm';
</style>
