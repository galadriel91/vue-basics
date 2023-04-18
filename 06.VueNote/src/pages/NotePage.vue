<template>
    <div>
        <NotePost :item="post" />
    </div>
</template>

<script setup lang="ts">
import NotePost from '../components/post/NotePost.vue';
import { useLoading } from '@/composables/useLoading';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';
const item = useItem();
const { post } = storeToRefs(item);
useLoading();
</script>
