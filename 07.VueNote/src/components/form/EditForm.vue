<template>
    <div class="inputWrap">
        <form @submit.prevent="onSubmitForm">
            <div class="formWrap">
                <div>
                    <label for="title">제목</label>
                    <input
                        id="title"
                        type="text"
                        :placeholder="item.title"
                        v-model="title"
                        ref="titleInput"
                    />
                </div>
                <div>
                    <label for="content">내용</label>
                    <textarea
                        id="content"
                        :placeholder="item.content"
                        v-model="content"
                    ></textarea>
                </div>
            </div>
            <div class="infoWrap" :class="{ noUpdate: !item.update }">
                <div class="dateWrap" v-if="item.update">
                    <span>최근 수정일 : </span>
                    <!-- <span>{{ DATE }}</span> -->
                </div>
                <div class="buttonWrap">
                    <button type="button" @click="onClickBefore">취소</button>
                    <button type="submit">수정</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, type PropType } from 'vue';
import type { NoteItems } from '@/store/types';
// import { useDate } from '@/composables/useDate';
import { useItem } from '@/store/itemStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<NoteItems>,
            required: true,
        },
    },
    setup(props) {
        const item = useItem();
        const { UPDATE_NOTE } = item;
        const router = useRouter();
        const title = ref('');
        const content = ref('');
        const titleInput = ref<HTMLInputElement | null>(null);
        // const DATE = useDate(props.item);
        const onClickBefore = () => {
            router.go(-1);
        };
        const onSubmitForm = async () => {
            if (title.value.length && content.value.length) {
                await UPDATE_NOTE({
                    id: props.item.id,
                    title: title.value,
                    content: content.value,
                    date: new Date(),
                    update: true,
                });
                router.push('/');
            } else {
                alert('다시 한번 확인해 주세요');
                titleInput.value?.focus();
            }
        };
        onMounted(() => {
            titleInput.value?.focus();
        });
        return {
            title,
            content,
            titleInput,
            onClickBefore,
            onSubmitForm,
            // DATE,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/NoteEdit';
</style>
