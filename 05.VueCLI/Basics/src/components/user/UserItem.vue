<template>
    <div>
        <div class="userWrap">
            <p class="xi-user-address"></p>
            <div class="userInfo">
                <slot name="userName"></slot>
                <slot name="userTime"></slot>
                <slot name="userPoints"></slot>
            </div>
        </div>
        <div class="userDesc" v-if="item.about">
            <h3>About</h3>
            <div class="aboutWrap" v-html="item.about"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/user/UserItem';
</style>