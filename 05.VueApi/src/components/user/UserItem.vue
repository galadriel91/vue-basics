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

<script lang="ts" setup>
    import { computed ,  type PropType } from 'vue';
    import type { PostsItem, UserItems } from '@/store/types';

    const props = defineProps({
        item:{
            type: Object as PropType<UserItems | PostsItem>,
            required: true,
        }
    })

    const userItem = computed(() => {
        if ('about' in props.item) {
            return props.item.about;
        } else {
            return false;
        }
    });

</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/user/UserItem';
</style>
