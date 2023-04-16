<template>
    <ul>
        <li v-for="(item, index) in lists" :key="item.id">
            <div class="itemWrap">
                <span class="indexNumber">{{ index + 1 }}</span>
                <div class="itemInfo">
                    <p v-if="item.domain">
                        <a :href="item.url" target="_blank">{{ item.title }}</a>
                    </p>
                    <p v-else>
                        <RouterLink :to="`/post/${item.id}`">{{
                            item.title
                        }}</RouterLink>
                    </p>
                    <div>
                        <span v-if="item.type === 'job'">by</span>
                        <span v-else>{{ item.points }} points by</span>
                        <RouterLink
                            :to="`/user/${item.user}`"
                            v-if="item.user"
                            >{{ item.user }}</RouterLink
                        >
                        <a :href="item.url" target="_blank" v-else>{{
                            item.domain ? item.domain : 'Unknown'
                        }}</a>
                        <span>{{ item.time_ago }}</span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script lang="ts" setup>

    import { itemStore } from '@/store/itemStore';
    import { storeToRefs } from 'pinia';
    
    const items = itemStore();
    const { lists } = storeToRefs(items);

</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/list/ListsItem';
</style>
