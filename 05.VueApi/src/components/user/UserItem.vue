<template>
    <div>
        <div class="userWrap">
            <p class="xi-user-address"></p>
            <div class="userInfo">
                <h4>
                    <slot name="userName"></slot>
                </h4>
                <span>
                    <slot name="userTime"></slot>
                </span>
                <p>
                    <slot name="userPoints"></slot>
                </p>
            </div>
        </div>
        <div class="userDesc" v-if="userItem">
            <h3>About</h3>
            <div class="aboutWrap" v-html="userItem"></div>
        </div>
    </div>
</template>

<script lang="ts">
import type { PostsItem, UserItems } from '@/store/types';
import { computed } from 'vue';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<UserItems | PostsItem>,
            required: true,
        },
    },
    setup(props) {
        const userItem = computed(() => {
            if ('about' in props.item) {
                return props.item.about;
            } else {
                return false;
            }
        });
        return {
            userItem,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/user/UserItem';
</style>
