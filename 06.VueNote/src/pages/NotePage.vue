<template>
    <div>
        <NotePost :item="post" />
    </div>
</template>

<script setup lang="ts">
import { useLoading } from '@/composables/useLoading';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';
import NotePost from '../components/post/NotePost.vue';

const item = useItem();
const { post } = storeToRefs(item);

useLoading();
</script>
