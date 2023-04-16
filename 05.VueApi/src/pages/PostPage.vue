<template>
    <div class="itemContainer">
        <div v-if="post">
            <UserItem :item="post">
                <template v-slot:userName
                    ><RouterLink :to="`/user/${post.user}`"
                        >User : {{ post.user }}</RouterLink
                    ></template
                >
                <template v-slot:userTime
                    >Posted : {{ post.time_ago }}</template
                >
                <template v-slot:userPoints
                    >Points : {{ post.points }}</template
                >
            </UserItem>
            <div class="itemWrap">
                <h1>{{ post.title }}</h1>
                <div v-html="post.content"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

    import { useLoading } from '@/composables/useLoading';
    import { itemStore } from '@/store/itemStore';
    import { storeToRefs } from 'pinia';
    import UserItem from '@/components/user/UserItem.vue';

    useLoading();
    const item = itemStore();
    const { post } = storeToRefs(item);

</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/PostPage';
</style>
