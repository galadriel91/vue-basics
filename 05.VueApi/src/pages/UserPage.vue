<template>
    <div class="userContainer">
        <UserItem :item="user" v-if="user">
            <template v-slot:userName>User : {{ user.id }}</template>
            <template v-slot:userTime>Created : {{ user.created }}</template>
            <template v-slot:userPoints>Karma : {{ user.karma }}</template>
        </UserItem>
    </div>
</template>

<script lang="ts">
import UserItem from '@/components/user/UserItem.vue';
import { defineComponent } from 'vue';
import { useLoading } from '@/composables/useLoading';
import { useItem } from '@/store/itemStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        UserItem,
    },
    setup() {
        useLoading();
        const item = useItem();
        const { user } = storeToRefs(item);
        return { user };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/UserPage';
</style>
