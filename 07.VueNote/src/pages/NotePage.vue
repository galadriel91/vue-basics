<template>
    <div>
        <NotePost :item="post" />
    </div>
</template>

<script lang="ts">
import NotePost from '../components/post/NotePost.vue';
import { useLoading } from '@/composables/useLoading';
import { useItem } from '@/store/itemStore';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        NotePost,
    },
    setup() {
        const item = useItem();
        const { post } = storeToRefs(item);
        useLoading();

        return {
            post,
        };
    },
});
</script>
