<template>
    <div>
        <EditForm :item="edit" />
    </div>
</template>

<script setup lang="ts">
import { useLoading } from '@/composables/useLoading';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';
import EditForm from '../components/form/EditForm.vue';

const item = useItem();
const { edit } = storeToRefs(item);

useLoading();
</script>
