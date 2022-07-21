<template>
    <div>Main</div>
</template>

<script>
import { fetchNoteItem } from '@/api';
export default {
    setup() {
        const fetchItem = async () => {
            const { data } = await fetchNoteItem();
            console.log(data);
        };
        fetchItem();
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
