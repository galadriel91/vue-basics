<template>
    <div>
        <EditForm :item="edit" />
    </div>
</template>

<script lang="ts">
import EditForm from '../components/form/EditForm.vue';
import { useLoading } from '@/composables/useLoading';
import { useItem } from '@/store/itemStore';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        EditForm,
    },
    setup() {
        const item = useItem();
        const { edit } = storeToRefs(item);
        useLoading();

        return {
            edit,
        };
    },
});
</script>
