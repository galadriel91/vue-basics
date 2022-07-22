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
                <!-- <span>{{ DATE }}</span> -->
                <!-- <span v-if="item.update">최근 수정</span> -->
            </div>
            <div class="btnWrap">
                <button class="xi-pen-o"></button>
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
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();
        const { onRemoveItem } = store;
        const onClickRemoveItem = () => {
            onRemoveItem(props.item.id);
        };
        return {
            onClickRemoveItem,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NoteItem';
</style>
