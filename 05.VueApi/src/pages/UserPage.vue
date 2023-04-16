<template>
    <div class="userContainer">
        <UserItem :item="user" v-if="user">
            <template v-slot:userName>User : {{ user.id }}</template>
            <template v-slot:userTime>Created : {{ user.created }}</template>
            <template v-slot:userPoints>Karma : {{ user.karma }}</template>
        </UserItem>
    </div>
</template>

<script lang="ts" setup>

    import { useLoading } from '@/composables/useLoading';
    import { itemStore } from '@/store/itemStore';
    import { storeToRefs } from 'pinia';
    import UserItem from '@/components/user/UserItem.vue';

    useLoading();
    const item = itemStore();
    const { user } = storeToRefs(item);

</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/UserPage';
</style>
