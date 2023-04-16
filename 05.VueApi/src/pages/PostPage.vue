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

<script lang="ts">
import UserItem from '@/components/user/UserItem.vue';
import { useLoading } from '@/composables/useLoading';
import { defineComponent } from 'vue';
import { itemStore } from '@/store/itemStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        UserItem,
    },
    setup() {
        useLoading();
        const item = itemStore();
        const { post } = storeToRefs(item);
        return { post };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/PostPage';
</style>
